import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserProfileDocument,
} from '../../utils/firebase/firebase.utils';
import FormButton from '../form-button/form-button.component';
import FormInput from '../form-input/form-input.component';
import './signup.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
  confirmPassword: '',
  displayName: '',
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords dont match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('email already in use');
      }
      console.log('signin err', err);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='signup my-8 md:my-0'>
      <div className='title flex flex-col my-4'>
        <h3 className='text-l font-bold'>Sign Up</h3>
        <p>Enter your details below to sign up</p>
      </div>

      <form className='login-form flex flex-col' onSubmit={handleSubmit}>
        <FormInput
          name='displayName'
          type='text'
          value={displayName}
          placeholder='Enter name'
          handleChange={handleChange}
          required
        />
        <FormInput
          name='email'
          type='email'
          value={email}
          placeholder='Enter email'
          handleChange={handleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          placeholder='Enter password'
          handleChange={handleChange}
          required
        />
        <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          placeholder='Re-enter password'
          handleChange={handleChange}
          required
        />

        <FormButton>Sign Up</FormButton>
      </form>
    </div>
  );
};

export default SignUp;
