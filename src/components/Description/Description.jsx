import React from 'react';
import './Description.css';
import webDeveloperImage from './webdeveloper.png'; 
import webDesignImage from './webdesign.jpg'; 
import dataAnalystImage from './dataanalyst.jpg'; 

const Description = () => {
  return (
    <section id="description">
      <div className="container">
        <h2>DESCRIPTION</h2>
        <div className="service-item">
          <img src={webDeveloperImage} alt="Web Development" />
          <h3>Web Developers</h3>
          <p>Web developers create websites, ensuring they are visually appealing, easy to navigate, and perform well.</p>
        </div>
        <div className="service-item">
          <img src={webDesignImage} alt="Web Design" />
          <h3>Web Design</h3>
          <p>Web design reflects a company’s brand and information, ensuring a user-friendly experience.</p>
        </div>
        <div className="service-item">
          <img src={dataAnalystImage} alt="Data Analyst" />
          <h3>Data Analyst</h3>
          <p>Data analysts conduct statistical analysis on structured data to uncover relevant business conclusions.</p>
        </div>
      </div>
    </section>
  );
};

export default Description;
