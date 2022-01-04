import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LoginSignUpPage from './pages/login-signup/login-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <div className='h-screen'>
          <Header />
          <Routes>
            <Route path='/aloe-you' element={<Homepage />} />
            <Route path='/aloe-you/shop' element={<ShopPage />} />
            <Route
              path='/aloe-you/login'
              element={
                this.props.currentUser ? (
                  <Navigate to='/aloe-you' />
                ) : (
                  <LoginSignUpPage />
                )
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
