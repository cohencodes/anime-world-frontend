import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emoji from '../Emoji/Emoji';
import './Login.css';

class Login extends Component {
  state = {
    error: null
  };

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

  handleDemo = () => {
    AuthApiService.postLogin({
      user_name: 'demoaccount',
      password: 'demoAccount@123'
    })
      .then(res => {
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
        <h1>Log In</h1>
        <form className="login_form" onSubmit={this.handleSubmitJwtAuth}>
          <div role="alert">
            {error && (
              <p className="error">
                {error} <Emoji symbol="😃" />
              </p>
            )}
          </div>{' '}
          <div>
            <label htmlFor="user_name">
              <FontAwesomeIcon icon="envelope" color="#ab24a1" size="sm" />{' '}
              Username{' '}
            </label>{' '}
            <input
              type="text"
              name="user_name"
              id="username"
              placeholder="username..."
            />
          </div>
          <div>
            <label htmlFor="password">
              <FontAwesomeIcon icon="key" color="#ab24a1" size="sm" /> Password{' '}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password..."
            />
          </div>
          <button type="submit">Log In</button>
          <button onClick={this.handleDemo}>Demo</button>
        </form>
      </section>
    );
  }
}

export default Login;
