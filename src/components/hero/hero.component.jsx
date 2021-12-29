import React from 'react';
import './hero.component.css';
import Directory from '../directory/directory.component';

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
    <Directory />
  </div>
);

export default Hero;
