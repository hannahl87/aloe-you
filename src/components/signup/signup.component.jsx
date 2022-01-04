import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormButton from '../form-button/form-button.component';
import FormInput from '../form-input/form-input.component';
import './signup.styles.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      console.log('passwords dont match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, {});

      this.setState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: '',
      });
    } catch (err) {
      console.log('signin err', err);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='signup my-8 md:my-0'>
        <div className='title flex flex-col my-4'>
          <h3 className='text-l font-bold'>Sign Up</h3>
          <p>Enter your details below to sign up</p>
        </div>

        <form className='login-form flex flex-col' onSubmit={this.handleSubmit}>
          <FormInput
            name='displayName'
            type='text'
            value={displayName}
            placeholder='Enter name'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='email'
            type='email'
            value={email}
            placeholder='Enter email'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            placeholder='Enter password'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            placeholder='Re-enter password'
            handleChange={this.handleChange}
            required
          />

          <FormButton>Sign Up</FormButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
