import { React, useContext } from 'react';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from './contexts/user.context';
import Navigation from './routes/navigation/navigation.component';
import Homepage from './routes/homepage/homepage.component';
import ShopPage from './routes/shop/shop.component';
import LoginSignUpPage from './routes/login-signup/login-signup.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import Basket from './routes/basket/basket.component';

const App = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <div className='h-screen'>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index path='aloe-you' element={<Homepage />} />
            <Route path='aloe-you/shop' element={<ShopPage />} />
            <Route path='aloe-you/shop/:type' element={<ShopPage />} />
            <Route path='aloe-you/basket' element={<Basket />} />
            <Route
              path='aloe-you/login'
              element={
                currentUser ? <Navigate to='/aloe-you' /> : <LoginSignUpPage />
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
