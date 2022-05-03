import { useState } from 'react';
import {
  signInWithGoogle,
  createUserProfileDocument,
  signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import FormButton from '../form-button/form-button.component';
import FormInput from '../form-input/form-input.component';
import './login.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logInGoogleUser = async () => {
    await signInWithGoogle();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          alert('User not found');
          break;
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        default:
          console.log('sign in error', err);
      }
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='login'>
      <div className='title flex flex-col my-4'>
        <h3 className='text-l font-bold'>Login</h3>
        <p>Welcome back, you've been missed!</p>
      </div>

      <form className='login-form flex flex-col' onSubmit={handleSubmit}>
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
        <FormButton type='submit'>Login</FormButton>
        <FormButton type='button' onClick={logInGoogleUser}>
          Sign in with Google
        </FormButton>
      </form>
    </div>
  );
};

export default Login;
