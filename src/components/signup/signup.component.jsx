import React from 'react';
import FormButton from '../form-button/form-button.component';
import FormInput from '../form-input/form-input.component';
import './signup.styles.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      mobile: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: '',
      password: '',
      name: '',
      mobile: '',
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='signup'>
        <div className='title flex flex-col my-4'>
          <h3 className='text-l font-bold'>Sign Up</h3>
          <p>Enter your details below to sign up</p>
        </div>

        <form className='login-form flex flex-col' onSubmit={this.handleSubmit}>
          <FormInput
            label='Name'
            name='name'
            type='text'
            value={this.state.name}
            placeholder='Enter name'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label='Email'
            name='email'
            type='email'
            value={this.state.email}
            placeholder='Enter email'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label='Mobile'
            name='mobile'
            type='text'
            value={this.state.mobile}
            placeholder='Enter mobile'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label='Password'
            name='password'
            type='password'
            value={this.state.password}
            placeholder='Enter password'
            handleChange={this.handleChange}
            required
          />

          <FormButton value='Sign Up' />
        </form>
      </div>
    );
  }
}

export default SignUp;
