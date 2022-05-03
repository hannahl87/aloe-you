import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import { UserContext } from '../../contexts/user.context';
import { connect } from 'react-redux';
import { signUserOut } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import './navigation.styles.scss';

const Navigation = ({ hidden }) => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signUserOut();
  };

  return (
    <Fragment>
      <header className='nav flex my-4 mx-6 justify-between'>
        <Link className='logo-link flex' to='/aloe-you'>
          <img
            src={logo}
            alt='Logo of a green monstera leaf'
            className='logo'
          />
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
              onClick={signOutHandler}
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
    </Fragment>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Navigation);
