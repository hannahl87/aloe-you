import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import './navigation.styles.scss';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Navigation = ({ currentUser, hidden }) => (
  <div>
    <header className='nav flex my-4 mx-6 justify-between'>
      <Link className='logo-link flex' to='/aloe-you'>
        <img src={logo} alt='Logo of a green monstera leaf' className='logo' />
        <h2 className='company-name flex items-end ml-2'>Aloe You</h2>
      </Link>
      <nav className='nav-links items-end hidden md:flex space-x-11'>
        <Link to='/aloe-you/shop' className='hover:text-teal-400'>
          Shop
        </Link>
        <Link to='/aloe-you/shop' className='hover:text-teal-400'>
          About
        </Link>
        <Link to='/aloe-you/shop' className='hover:text-teal-400'>
          Care
        </Link>
        <Link to='/aloe-you/shop' className='hover:text-teal-400'>
          Contact
        </Link>
      </nav>
      <div className='utils flex'>
        <CartIcon />
        {currentUser ? (
          <div
            className='login flex items-end ml-4 hover:text-teal-400 text-m cursor-pointer'
            onClick={() => auth.signOut()}
          >
            Logout
          </div>
        ) : (
          <Link
            to='aloe-you/login '
            className='login flex items-end ml-4 hover:text-teal-400 text-m cursor-pointer'
          >
            Login
          </Link>
        )}
      </div>
      {hidden ? null : <CartDropdown />}
    </header>
    <Outlet />
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Navigation);
