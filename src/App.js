import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LoginSignUpPage from './pages/login-signup/login-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({
          currentUser: userAuth,
        });
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
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route path='/aloe-you' element={<Homepage />} />
            <Route path='/aloe-you/shop' element={<ShopPage />} />
            <Route path='/aloe-you/login' element={<LoginSignUpPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
