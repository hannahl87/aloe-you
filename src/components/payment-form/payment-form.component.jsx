import { CardElement } from '@stripe/react-stripe-js';
import FormButton from '../form-button/form-button.component';
import './payment-form.styles.scss';

const PaymentForm = () => {
  return (
    <div className='payment-form'>
      <CardElement />
      <FormButton type='submit'>Pay Now</FormButton>
    </div>
  );
};

export default PaymentForm;
