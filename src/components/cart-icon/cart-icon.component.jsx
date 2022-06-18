import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  const getQuantity = () => {
    let quantity = 0;
    cartItems.forEach((item) => {
      quantity += item.quantity;
    });
    return quantity;
  };

  return (
    <div
      onClick={toggleCartOpen}
      className='cart-icon relative flex items-end hover:scale-125 cursor-pointer'
    >
      <ShoppingIcon />
      <span className='count absolute'>
        {getQuantity() < 1 ? '' : getQuantity()}
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
