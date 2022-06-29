import { useContext } from 'react';
import { CustomerContext } from '../../contexts/customer.context';
import './my-account.styles.scss';

const MyAccount = () => {
  const { currentCustomer } = useContext(CustomerContext);

  return (
    <div className='account-page mt-20 mx-14 flex flex-col items-center'>
      <h3 className='text-l font-bold'>My Account</h3>

      <div className='customer-details forms flex flex-col py-6 px-8 rounded-xl md:flex-row md:space-x-20 mt-6'>
        <p>
          Name:
          <span className='text-gray-600'>
            {' '}
            {currentCustomer.displayName ?? currentCustomer.displayName}
          </span>
        </p>
        <p>
          Email:
          <span className='text-gray-600'>
            {currentCustomer.email ?? currentCustomer.email}
          </span>
        </p>
        <p>
          Address:
          <span className='text-gray-600'>
            {currentCustomer.address ?? currentCustomer.address}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MyAccount;
