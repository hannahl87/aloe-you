import { useElements, useStripe } from '@stripe/react-stripe-js';
import PaymentForm from '../../components/payment-form/payment-form.component';
import './checkout.styles.scss';

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    console.log('Payment Successful');
  };

  return (
    <div className='checkout-page mt-20 mx-14 flex flex-col items-center'>
      <div className='payment-form-container forms flex flex-col py-6 px-8 rounded-xl mt-6 h-44 w-96'>
        <div className='title flex flex-col mb-4'>
          <h3 className='text-l font-bold'>Checkout</h3>
          <p>Enter your details below to pay</p>
        </div>
        <form action='submit'>
          <PaymentForm />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
