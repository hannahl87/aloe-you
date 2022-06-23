import { useElements, useStripe } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { BasketContext } from '../../contexts/basket.context';
import FormButton from '../form-button/form-button.component';
import './payment-form.styles.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { basketTotal } = useContext(BasketContext);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: basketTotal * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Hannah Lynn',
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert(`Payment for £${basketTotal} successful`);
      }
    }
  };

  return (
    <div className='payment-form'>
      <form action='submit' onSubmit={paymentHandler}>
        <CardElement options={{ hidePostalCode: true }} />
        <FormButton type='submit'>Pay Now</FormButton>
      </form>
    </div>
  );
};

export default PaymentForm;
