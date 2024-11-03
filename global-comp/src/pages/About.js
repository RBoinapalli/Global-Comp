// src/pages/About.js
import React from 'react';
import '../styles.css';
import missionImage from '../assets/images/ourmission.png';
import visionImage from '../assets/images/ourvision.png';
import goalImage from '../assets/images/ourgoals.png';

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
              <img src={missionImage} alt="Mission" className="card-image" />
              <div className="card-text">
                <h4>Our Mission</h4>
                <p>We provide good career growth opportunities for information technology experts to fulfill their creative thoughts and ideas for business needs.</p>
              </div>
            </div>
          </div>
          <div className="about-card">
            <div className="card-content">
              <img src={visionImage} alt="Vision" className="card-image" />
              <div className="card-text">
                <h4>Our Vision</h4>
                <p>We are a global innovative company that combines information technology expertise with technology to improve your business goals and fulfill end-user needs.</p>
              </div>
            </div>
          </div>
          <div className="about-card">
            <div className="card-content">
              <img src={goalImage} alt="Goal" className="card-image" />
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
