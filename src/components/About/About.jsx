import React from 'react';
import './About.css';
import aboutUsImage from './aboutus.png'; 

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <img src={aboutUsImage} alt="About Us Icon" />
        <h2>About Us</h2>
        <p>Hello! I'm Ramon Bernal, currently a student of BSIT-3B. This website showcases my skills and services as I continue my journey in the IT field.</p>
      </div>
    </section>
  );
};

export default About;
