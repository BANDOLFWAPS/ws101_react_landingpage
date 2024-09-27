import React from 'react';
import './Footer.css';
import footerLogo from './ramon.jpg'; 

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img src={footerLogo} alt="Footer Logo" />
        <p>&copy; 2024 Ramon Bernal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
