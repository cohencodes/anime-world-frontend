import React, { Component } from 'react';
import TokenService from '../../services/token-service';

class Login extends Component {
  state = { error: null };

  handleSubmitAuth = event => {
    event.preventDefault();

    const { user_name, password } = event.target;

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = '';
    password.value = '';
  };

  render() {
    const { error } = this.state;
    return (
      <section>
        <h1>NANI!?!?</h1>
        <h3>You haven't logged in yet?</h3>
        <form className="login" onSubmit={this.handleSubmitAuth}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div>
            <label htmlFor="username">Email</label>
            <input type="text" name="user_name" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Log In</button>
        </form>
      </section>
    );
  }
}

export default Login;
