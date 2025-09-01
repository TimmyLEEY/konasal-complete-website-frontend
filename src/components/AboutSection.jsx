import React from "react";
import "./AboutSection.css";
import aboutImage from "../assets/contact-BE00mUEh.png"; // replace with your image

const AboutSection = () => {
  return (
         <section className="about-section">
      <div className="about-container">
        {/* LEFT: text */}
        <div className="about-text">
          <h2>About Konasal Legacy Partners</h2>
        </div>

        {/* RIGHT: image */}
        <div className="about-image">
          <img src={aboutImage} alt="About Konasal Legacy Partners" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
