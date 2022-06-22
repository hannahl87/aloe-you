import PaymentForm from '../../components/payment-form/payment-form.component';
import './checkout.styles.scss';

const Checkout = () => {
  return (
    <div className='checkout-page mt-20 mx-14 flex flex-col items-center'>
      <div className='payment-form-container forms flex flex-col py-6 px-8 rounded-xl mt-6 h-44 w-96'>
        <div className='title flex flex-col mb-4'>
          <h3 className='text-l font-bold'>Checkout</h3>
          <p>Enter your details below to pay</p>
        </div>
        <PaymentForm />
      </div>
    </div>
  );
};

export default Checkout;
