import './form-button.styles.scss';

const FormButton = ({ children, ...otherProps }) => (
  <div className='btn-container'>
    <button
      className='form-btn rounded-xl px-5 py-2 mt-2 w-full font-bold'
      {...otherProps}
    >
      {children}
    </button>
  </div>
);

export default FormButton;
