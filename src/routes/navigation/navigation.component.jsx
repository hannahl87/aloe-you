import { Fragment, useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import { UserContext } from '../../contexts/user.context';
import { BasketContext } from '../../contexts/basket.context';
import { connect } from 'react-redux';
import { signUserOut } from '../../utils/firebase/firebase.utils';
import BasketIcon from '../../components/basket-icon/basket-icon.component';
import BasketDropdown from '../../components/basket-dropdown/basket-dropdown.component';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isBasketOpen } = useContext(BasketContext);
  const navigate = useNavigate();

  const signOutHandler = async () => {
    await signUserOut();
    navigate('/aloe-you/login');
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
          <Link to='/aloe-you' className='hover:text-teal-400'>
            Home
          </Link>
          <Link to='/aloe-you/shop' className='hover:text-teal-400'>
            Shop
          </Link>
        </nav>
        <div className='utils flex'>
          <BasketIcon />
          {currentUser ? (
            <div className='user flex items-end pl-2'>
              <Link to='/aloe-you/my-account' className='hover:text-teal-400'>
                My Account
              </Link>
              <div
                className='login flex items-end ml-4 hover:text-teal-400 text-m cursor-pointer'
                onClick={signOutHandler}
              >
                Logout
              </div>
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
        {isBasketOpen && <BasketDropdown />}
      </header>
      <Outlet />
    </Fragment>
  );
};

const mapStateToProps = ({ user: { currentUser }, basket: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Navigation);
