// src/pages/About.js
import React from 'react';
import '../css/styles.css';


const About = () => {
  return (
    <div>
      <section id="about">
        <div className="about-banner">
          <h2>About Us</h2>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div className="card-content">
              
              <div className="card-text">
                <h4>Our Mission</h4>
                <p>We provide good career growth opportunities for information technology experts to fulfill their creative thoughts and ideas for business needs.</p>
              </div>
            </div>
          </div>
          <div className="about-card">
            <div className="card-content">
              
              <div className="card-text">
                <h4>Our Vision</h4>
                <p>We are a global innovative company that combines information technology expertise with technology to improve your business goals and fulfill end-user needs.</p>
              </div>
            </div>
          </div>
          <div className="about-card">
            <div className="card-content">
             
              <div className="card-text">
                <h4>Our Goal</h4>
                <p>We aim to improve user problems, business solutions, products' pain points, and motivations, adopting new artificial technology trends to transform businesses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
