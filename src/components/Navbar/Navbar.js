import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import jwtDecode from 'jwt-decode';

class Navbar extends Component {
  getUserName = () => {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    return decoded.sub;
  };

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.reload();
  };
  renderLoggedOutView = () => {
    return (
      <div className="nav-logged-out">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    );
  };

  renderLoggedInView = () => {
    return (
      <div className="nav-logged-in">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/watchlist">WatchList</NavLink>
        <NavLink to="/home" onClick={this.handleLogoutClick}>
          Logout
        </NavLink>
        <p className="welcome_message"> Welcome, {this.getUserName()}!</p>
      </div>
    );
  };

  render() {
    return (
      <>
        <nav className="nav">
          {TokenService.hasAuthToken()
            ? this.renderLoggedInView()
            : this.renderLoggedOutView()}
        </nav>
      </>
    );
  }
}

export default Navbar;
