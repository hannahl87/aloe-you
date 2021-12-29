import React from 'react';
import ShopCard from '../shop-card/shop-card.component';
import './hero.component.css';
import monstera from '../../assets/images/monstera.webp';
import pothos from '../../assets/images/scindapusus.webp';
import rubber from '../../assets/images/rubber-plant.webp';

const Hero = () => (
  <div className='hero col-span-3 mr-14'>
    <div className='hero-title text-3xl'>
      <h1>Boost Your Mood</h1>
    </div>
    <div className='hero-subtitle text-base my-4'>
      <h3>
        Plants have been shown to make you feel calm and relaxed. From air
        purifying, to easy care, we have you covered to bring your home to life.
        Shop our carefully grown, healthy and happy houseplants, delivered
        straight to your door!
      </h3>
    </div>
    <div className='cards grid grid-cols-3 gap-3'>
      <ShopCard type={'Easy Care'} img={rubber} className='col-span-1' />
      <ShopCard type={'Pet Friendly'} img={monstera} className='col-span-1' />
      <ShopCard type={'Low Light'} img={pothos} className='col-span-1' />
    </div>
  </div>
);

export default Hero;
