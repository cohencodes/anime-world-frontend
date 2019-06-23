import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SignupForm.css';

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
    const { user_name, password } = event.target;

    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value
    })
      .then(user => {
        user_name.value = '';
        password.value = '';
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <section>
        <h1>Sign Up</h1>
        <form className="signup_form" onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p className="error">{error}</p>}</div>
          <div>
            <label htmlFor="user_name">
              <FontAwesomeIcon icon="envelope" color="#6DB65B" size="sm" />{' '}
              Username{' '}
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              value={this.state.user_name}
              onChange={this.handleChange}
              placeholder="username..."
              required
            />
          </div>
          <div>
            <label htmlFor="password">
              <FontAwesomeIcon icon="key" color="#6DB65B" size="sm" /> Password{' '}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="password..."
              required
            />
          </div>
          <button type="submit">Count me in</button>
        </form>
      </section>
    );
  }
}

export default SignupForm;
