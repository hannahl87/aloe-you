import React from 'react';
import './form-button.styles.css';

const FormButton = ({ value }) => (
  <div className='btn-container'>
    <button className='form-btn rounded-xl px-5 py-2 mt-2 w-full hover:scale-105'>
      {value}
    </button>
  </div>
);

export default FormButton;
