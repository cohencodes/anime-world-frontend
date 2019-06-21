import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';

class Navbar extends Component {
  renderLoggedOutView = () => {
    return (
      <div className="nav-logged-out">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    );
  };

  renderLoggedInView = () => {
    return (
      <div className="nav-logged-in">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/watchlist">WatchList</NavLink>
        <NavLink to="/">Logout</NavLink>
      </div>
    );
  };

  render() {
    return (
      <nav className="nav">
        {TokenService.hasAuthToken()
          ? this.renderLoggedInView()
          : this.renderLoggedOutView()}
      </nav>
    );
  }
}

export default Navbar;
