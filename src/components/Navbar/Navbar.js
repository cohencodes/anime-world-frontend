import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div>
          <NavLink>Search</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink>Login</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
