import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

class Login extends Component {
  state = { error: null };

  handleSubmitJwtAuth = event => {
    event.preventDefault();

    const { user_name, password } = event.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        window.location.reload();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <section>
        <h1>NANI!?!?</h1>
        <h3>You haven't logged in yet?</h3>
        <form className="login" onSubmit={this.handleSubmitJwtAuth}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div>
            <label htmlFor="username">Username</label>
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
