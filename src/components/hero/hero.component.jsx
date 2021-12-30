import React from 'react';
import './hero.styles.css';
import Directory from '../directory/directory.component';

const Hero = () => (
  <div className='hero-container mx-8 md:col-span-3 md:mr-14'>
    <div className='hero-title text-4xl'>
      <p>Boost Your Mood</p>
    </div>
    <div className='hero-subtitle text-base my-4'>
      <p>
        Plants have been shown to make you feel calm and relaxed. From air
        purifying, to easy care, we have you covered to bring your home to life.
        Shop our carefully grown, healthy and happy houseplants, delivered
        straight to your door!
      </p>
    </div>
    <Directory />
  </div>
);

export default Hero;
