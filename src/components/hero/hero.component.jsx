import React from 'react';
import ShopCard from '../shop-card/shop-card.component';
import './hero.component.css';
import monstera from '../../assets/images/monstera.webp';
import pothos from '../../assets/images/scindapusus.webp';
import rubber from '../../assets/images/rubber-plant.webp';

const Hero = () => (
  <div className='hero flex flex-col ml-8'>
    <div className='hero-title text-3xl mt-6'>
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
    <div className='cards flex space-x-3'>
      <ShopCard type={'Easy Care'} img={rubber} />
      <ShopCard type={'Pet Friendly'} img={monstera} />
      <ShopCard type={'Low Light'} img={pothos} />
    </div>
  </div>
);

export default Hero;
