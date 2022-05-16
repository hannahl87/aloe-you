import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import CtaButton from '../cta-button/cta-button.component';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown flex flex-col items-center rounded-lg shadow-md absolute p-4'>
      <div className='cart-items flex flex-col overflow-scroll w-full'>
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <CtaButton text='Go to Checkout' />
    </div>
  );
};

export default CartDropdown;
