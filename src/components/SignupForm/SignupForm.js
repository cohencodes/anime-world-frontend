import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';

class SignupForm extends Component {
  state = {
    user_name: '',
    email: '',
    password: '',
    error: null
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user_name, email, password } = event.target;

    AuthApiService.postUser({
      user_name: user_name.value,
      email: email.value,
      password: password.value
    })
      .then(user => {
        // user_name.value = '';
        // email.value = '';
        // password.value = '';
        console.log('user posted');
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <section>
        <h1>Create An Account</h1>
        <form className="signup_form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="user_name">User Name: </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              value={this.state.user_name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </section>
    );
  }
}

export default SignupForm;
