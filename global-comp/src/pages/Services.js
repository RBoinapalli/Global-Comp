import React from 'react';
import '../css/styles.css';

const Services = () => {
  const servicesList = [
    {
      title: "Business Strategy Development",
      content: "Comprehensive analysis and development of a strategic plan to guide your business towards its goals.",
    },
    {
      title: "Financial Planning and Analysis",
      content: "Expert guidance on budgeting, forecasting, and financial analysis to optimize your financial performance.",
    },
    {
      title: "Digital Transformation Consulting",
      content: "Assistance with adopting new technologies and integrating them into your business processes to enhance efficiency and competitiveness.",
    },
    {
      title: "Market Research and Analysis",
      content: "In-depth research and analysis of market trends, customer preferences, and competitive landscape to inform strategic decisions.",
    },
    {
      title: "Operational Efficiency Improvement",
      content: "Evaluation and optimization of your business operations to streamline processes and improve productivity.",
    },
    {
      title: "Risk Management Solutions",
      content: "Identification and mitigation of potential risks to safeguard your business against uncertainties and challenges.",
    },
  ];

  return (
    <section id="services">
      <div className="services-banner">
        <h2>Services</h2>
      </div>
      <div className="services-container">
        <div className="services-content">
          {servicesList.map((service, index) => (
            <div className="dropdown" key={index}>
              <button className="dropdown-btn">{service.title}</button>
              <div className="dropdown-content">{service.content}</div>
            </div>
          ))}
        </div>
        <div className="services-image">
          <img src="images/WorkFromHome-1024x784.webp" alt="Services" />
        </div>
      </div>
    </section>
  );
};

export default Services;
