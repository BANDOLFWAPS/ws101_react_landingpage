import React from 'react';
import './Navbar.css';
import logo from './itlogo.jpg'; 

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Bandolf Programmer Logo" />
        <span className="brand">BANDOLF PROGRAMMER</span>
      </div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#description">Description</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
