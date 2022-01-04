import React from 'react';
import './form-input.styles.css';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='form-input'>
    {label ? (
      <label htmlFor='email' className='label'>
        {label}{' '}
      </label>
    ) : null}
    <input
      className='shadow-xl rounded-lg p-2 my-1 w-full'
      onChange={handleChange}
      {...otherProps}
    />
  </div>
);

export default FormInput;
