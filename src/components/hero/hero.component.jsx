import React from 'react';
import ShopCard from '../shop-card/shop-card.component';
import './hero.component.css';
import monstera from '../../assets/images/monstera.webp';
import pothos from '../../assets/images/scindapusus.webp';
import rubber from '../../assets/images/rubber-plant.webp';

const Hero = () => (
  <div className='hero-container mx-8 md:col-span-3 md:mr-14'>
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
    <div className='cards mt-6 flex flex-wrap items-center md:grid md:grid-cols-3 md:gap-5'>
      <ShopCard type={'Easy Care'} img={rubber} />
      <ShopCard type={'Pet Friendly'} img={monstera} />
      <ShopCard type={'Low Light'} img={pothos} />
    </div>
  </div>
);

export default Hero;
