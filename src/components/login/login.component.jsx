import React from 'react';
import FormButton from '../form-button/form-button.component';
import FormInput from '../form-input/form-input.component';
import './login.styles.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (err) {
      console.log('sign in error', err.message);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='login'>
        <div className='title flex flex-col my-4'>
          <h3 className='text-l font-bold'>Login</h3>
          <p>Welcome back, you've been missed!</p>
        </div>

        <form className='login-form flex flex-col' onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            placeholder='Enter email'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            placeholder='Enter password'
            handleChange={this.handleChange}
            required
          />
          <FormButton type='submit'>Login</FormButton>
          <FormButton type='button' onClick={signInWithGoogle}>
            Sign in with Google
          </FormButton>
        </form>
      </div>
    );
  }
}

export default Login;
