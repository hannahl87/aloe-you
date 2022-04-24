import React from 'react';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Homepage from './routes/homepage/homepage.component';
import ShopPage from './routes/shop/shop.component';
import LoginSignUpPage from './routes/login-signup/login-signup.component';
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
          <Routes>
            <Route path='/' element={<Navigation />}>
              <Route index path='aloe-you' element={<Homepage />} />
              <Route path='aloe-you/shop' element={<ShopPage />} />
              <Route
                path='aloe-you/login'
                element={
                  this.props.currentUser ? (
                    <Navigate to='/aloe-you' />
                  ) : (
                    <LoginSignUpPage />
                  )
                }
              />
            </Route>
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
