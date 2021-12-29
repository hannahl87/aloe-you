import React from 'react';
import './shop-card.component.css';
import monstera from '../../assets/images/monstera.webp';

const ShopCard = () => (
  <div className='shop-card flex flex-col cursor-pointer hover:scale-105'>
    <div className='top-card rounded-t-xl'>
      <img src={monstera} alt='plant' className='plant-img rounded-t-xl' />
    </div>
    <div className='shop-cta text-center bg-teal-300 rounded-b-xl py-1 w-full'>
      <p className='shop-title text-white'>Easy Care</p>
      <span className='cta'>Shop Now</span>
    </div>
  </div>
);

export default ShopCard;
