import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div
      onClick={toggleCartOpen}
      className='cart-icon relative flex items-end hover:scale-125 cursor-pointer'
    >
      <ShoppingIcon />
      <span className='count absolute'>1</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
