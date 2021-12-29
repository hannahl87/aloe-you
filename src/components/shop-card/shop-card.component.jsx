import React from 'react';
import './shop-card.component.css';

const ShopCard = ({ type, img }) => (
  <div className='shop-card flex flex-col mb-4 cursor-pointer hover:scale-105 md:col-span-1'>
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className='top-card rounded-t-xl hidden md:flex'
    ></div>
    <img src={img} alt='plant' className='md:hidden' />
    <div className='shop-cta text-center rounded-b-xl py-1'>
      <p className='shop-title text-white'>{type}</p>
      <span className='cta'>Shop Now</span>
    </div>
  </div>
);

export default ShopCard;
