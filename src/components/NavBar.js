import React from 'react';
import logo from '../img/mlogo.png';

const NavBar = () => {
  return (
    <nav className="nav navbar navbar-expand-md navbar-light fixed-top py-3">
      <div className="container">
        <a href="index.html" className="navbar-brand">
          <img src={logo} alt="logo" width="50" height="50" />
          <h3 className="d-inline align-middle">Mizuxe</h3>
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#authors" className="nav-link">
                Meet the authors
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div />
    </nav>
  );
};

export default NavBar;
