import React from 'react';
import './cta-button.styles.scss';

const CtaButton = ({ text }) => (
  <div className='cta-container'>
    <button className='cta-btn rounded-3xl px-5 py-2 mt-2 hover:scale-105'>
      {text}
    </button>
  </div>
);

export default CtaButton;
