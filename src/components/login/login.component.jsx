import React from 'react';
import FormButton from '../form-button/form-button.component';
import FormInput from '../form-input/form-input.component';
import './login.component.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='login w-2/5'>
        <div className='title flex flex-col items-center my-4'>
          <h2 className='font-bold'>Aloe You</h2>
          <p>Welcome back, you've been missed!</p>
        </div>

        <form className='login-form flex flex-col' onSubmit={this.handleSubmit}>
          <label htmlFor='email'>Email</label>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            placeholder='Enter email'
            handleChange={this.handleChange}
            required
          />
          <label htmlFor='password'>Password</label>
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            placeholder='Enter password'
            handleChange={this.handleChange}
            required
          />

          <FormButton value='Login' />
        </form>
      </div>
    );
  }
}

export default Login;
