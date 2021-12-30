import React from 'react';
import Login from '../../components/login/login.component';
import SignUp from '../../components/signup/signup.component';
import './login-signup.styles.css';

const LoginSignUpPage = () => (
  <div className='flex flex-col items-center justify-between m-14'>
    <h2 className='text-xl font-bold'>Aloe You!</h2>
    <div className='forms flex flex-col md:flex-row md:space-x-20 mt-6'>
      <Login />
      <SignUp />
    </div>
  </div>
);

export default LoginSignUpPage;
