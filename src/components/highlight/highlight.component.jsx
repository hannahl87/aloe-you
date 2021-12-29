import React from 'react';
import './highlight.component.css';
import sans from '../../assets/images/sans.webp';
import CtaButton from '../cta-button.component.css/cta-button.component';

const Highlight = () => (
  <div className='highlight-container mr-4'>
    <div className='window flex justify-center items-center mx-6 mt-6'>
      <img
        src={sans}
        alt='Picture of a snake plant'
        className='highlight-img items-center'
      />
    </div>
    <div className='highlight-title mx-6'>
      <h2 className='my-1'>Air Purifying</h2>
      <span className='title-info'>
        Not just beautiful to look at, these plants also improve air quality and
        oxygen levels.
      </span>
    </div>
    <CtaButton />
  </div>
);

export default Highlight;
