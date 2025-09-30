import React from "react";
import "./LegacySection.css";
import img1 from "../assets/download (4).jpeg";
import img2 from "../assets/images.jpeg";
import img3 from "../assets/out10.jpg";
import { Link } from "react-router-dom";

const LegacySection = () => {
  return (
    <section id="service" className="legacy-section">
      <h2>
        Build a Legacy That Lasts — With the Right Tools and Guidance
      </h2>
      <div className="legacy-cards">
        <div className="card">
          <img src={img1} alt="Financial Literacy" />
          <h3>Financial Literacy and Workshop</h3>
          <a href="https://calendly.com/inquiry-konasalinsurance">Learn More</a>
        </div>
        <div id="cardd" className="card">
          <img src={img2} alt="Life and Legacy" />
          <h3>Life and Legacy Coverage</h3>
          <a href="https://konasal.netlify.app/#product">Learn More</a>
        </div>
        <div className="card">
          <img src={img3} alt="Multiple Income" />
          <h3>Multiple Income Strategies</h3>
          <Link to="/build-your-plan">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
