import { useContext, useState } from 'react';
import FormButton from '../../components/form-button/form-button.component';
import FormInput from '../../components/form-input/form-input.component';
import OrdersTable from '../../components/orders-table/orders-table.component';
import { CustomerContext } from '../../contexts/customer.context';
import { updateCustomerDocument } from '../../utils/firebase/firebase.utils';
import './my-account.styles.scss';

const MyAccount = () => {
  const { currentCustomer } = useContext(CustomerContext);
  const defaultFormFields = {
    displayName: currentCustomer?.customer?.displayName ?? '',
    mobile: currentCustomer?.customer?.mobile ?? null,
    address: currentCustomer?.customer?.address ?? '',
  };
  const [editForm, setEditForm] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, mobile, address } = currentCustomer.customer;
  const toggleForm = () => {
    setEditForm(!editForm);
  };

  const saveCustomerDetails = async (e) => {
    e.preventDefault();

    try {
      await updateCustomerDocument(currentCustomer.userId, formFields);
    } catch (err) {
      console.log('error', err);
    }
    toggleForm();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='account-page mt-20 mx-14 flex flex-col items-center'>
      <h3 className='text-l font-bold'>My Account</h3>
      {editForm ? (
        <form
          className='customer-form forms flex flex-col items-center py-6 px-8 rounded-xl md:flex-row md:space-x-2 mt-6'
          onSubmit={saveCustomerDetails}
        >
          <div>My Details</div>
          <FormInput
            name='displayName'
            type='text'
            defaultValue={displayName}
            placeholder='Enter name'
            handleChange={handleChange}
            required
          />
          <FormInput
            name='mobile'
            type='number'
            defaultValue={mobile}
            placeholder='Enter mobile'
            handleChange={handleChange}
            required
          />
          <FormInput
            name='address'
            type='text'
            defaultValue={address}
            placeholder='Enter address'
            handleChange={handleChange}
            required
          />
          <FormButton type='submit'>Save</FormButton>
        </form>
      ) : (
        <div className='customer-details forms flex flex-col items-center py-6 px-8 rounded-xl md:flex-row md:space-x-4 mt-6'>
          <p className='font-bold'>
            Name:
            <span className='pl-2 text-gray-600 font-normal'>
              {displayName}
            </span>
          </p>
          <p className='font-bold'>
            Mobile:
            <span className='pl-2 text-gray-600 font-normal'>{mobile}</span>
          </p>
          <p className='font-bold'>
            Address:
            <span className='pl-2 text-gray-600 font-normal'>{address}</span>
          </p>
          <FormButton type='button' onClick={toggleForm}>
            Edit
          </FormButton>
        </div>
      )}
      <OrdersTable />
    </div>
  );
};

export default MyAccount;
