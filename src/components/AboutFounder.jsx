import React from "react";
import "./AboutFounder.css";

const AboutFounder = () => {
  return (
    <section className="about-founder">
      <div className="container">
        {/* LEFT */}
        <div className="founder-left">
          <h2 className="founder-title">
            About the Founder — <span>Afua Anita Asabere</span>
          </h2>
          <p className="founder-desc">
            Afua Anita Asabere is a Nigerian-Ghanaian American entrepreneur, born
            in Chicago, with a heart for service and community impact. As an
            Application Cybersecurity Specialist in the healthcare sector, she
            brings a strong analytical and strategic background to her leadership
            role.
          </p>
          <a href="#our-story" className="btn-outline">
            Learn More About Our Story
          </a>
        </div>

       

          {/* Responsive video */}
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/xbB968XxG0Q?si=GrG_mzf3obvYzfiG"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      
    </section>
  );
};

export default AboutFounder;
