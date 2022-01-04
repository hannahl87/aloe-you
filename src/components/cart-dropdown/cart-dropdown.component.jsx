import React from 'react';
import './cart-dropdown.styles.css';
import CtaButton from '../cta-button.component.css/cta-button.component';

const CartDropdown = () => (
  <div className='cart-dropdown flex flex-col items-center rounded-lg shadow-md absolute p-4'>
    <div className='cart-items flex flex-col overflow-scroll' />
    <CtaButton text='Go to Checkout' />
  </div>
);

export default CartDropdown;
