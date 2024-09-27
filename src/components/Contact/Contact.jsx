import React from 'react';
import './Contact.css';
import facebookLogo from './faceboooklogo.png'; 
import githubLogo from './github.jpg';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div>
          <i className="fas fa-envelope"></i>
          <p>Email: wwwramonbernal60@gmail.com</p>
        </div>
        <div>
          <i className="fas fa-phone"></i>
          <p>Phone: 09953886281</p>
        </div>
        <div>
          <i className="fas fa-map-marker-alt"></i>
          <p>Location: Purok Dalungyan Brgy Isabang Lucena City</p>
        </div>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/ramon.bernal.52012/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://github.com/BANDOLFWAPS" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={githubLogo} alt="GitHub" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
