import React from "react";
import "./AboutFounder.css";
import { Link, useNavigate } from "react-router-dom";


const AboutFounder = () => {
  return (
    <section className="about-founder">
      <div className="container">
        {/* LEFT - text */}
        <div className="founder-left">
          <h3 className="founder-title">
            About the Founder — <span>Afua Anita Asabere</span>
          </h3>
          <p className="founder-desc">
            Afua Anita Asabere is a Nigerian–Ghanaian American entrepreneur,
            born in Chicago, with a heart for service and community impact. As an
            Application Cybersecurity Specialist in the healthcare sector, she
            brings a strong analytical and strategic background to her leadership
            role.
          </p>
          
          <Link to="/about" className="btn-outline">Learn More Abour Our Story </Link>
        </div>

        {/* RIGHT - promo card */}
        <div className="founder-right">
          <iframe width="400" height="315" src="https://www.youtube.com/embed/xbB968XxG0Q?si=GrG_mzf3obvYzfiG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <p className="ceo-note">A Message from our CEO</p>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
