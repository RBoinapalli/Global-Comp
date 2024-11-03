// src/pages/Home.js
import React from 'react';
import '../css/styles.css';
import bannerImage from '../assets/images/banner.png'; // Example banner image

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="banner">
          <div className="banner-content">
            <h2>WE ARE THINKING TO IMPROVE YOUR PRODUCTS</h2>
          </div>
        </div>
        <div className="info">
          <h3>WHAT SETS US APART</h3>
          <div className="badges">
            <div className="badge">
              <h1>🔧</h1>
              <p>Real-world-tested strategies, methods, and programs</p>
            </div>
            <div className="badge">
              <h1>👋</h1>
              <p>True collaboration from strategy to execution</p>
            </div>
            <div className="badge">
              <h1>📈</h1>
              <p>Data-driven insights uncover growth opportunities</p>
            </div>
            <div className="badge">
              <h1>🎓</h1>
              <p>Practice leaders with decades of experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
