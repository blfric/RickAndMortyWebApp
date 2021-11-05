import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png';

const NavBar = ({ children }) => {

  return (
    <header className="header">
      <nav className="navbar">
          <a className="nav-logo">
            <img className="nav-logo" src={Logo} alt="logo" />
          </a>
          <ul className="nav-menu">
              <li className="nav-item">
                  <Link className="nav-link" to="/find">Find a character</Link>
              </li>
              <li className="nav-item">
                  <Link to="/" className="nav-link">All characters</Link>
              </li>
          </ul>
          <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>
      </nav>
    </header>

  );
}

export default NavBar;