import React from "react";
import "./Hero.css";
import heroImage from "../assets/modern-families-retro-style.jpg"; // Save your image in src/assets
import { Link } from "react-router-dom";

const Hero = () => {
  const user = localStorage.getItem("user");

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <h1>
          Build Your Legacy. Break Barriers. <br />Rise With Us.
        </h1>
        <p>
          Empowering Black immigrants & African descendants to reclaim financial power.
        </p>
        <div className="hero-buttons">
          {!user ? (
            <>
              <Link to="/register" className="btn-outline">
                Register Now
              </Link>
              <Link to="/login" className="btn-outline">
                Login
              </Link>
            </>
          ) : (
            <Link to="/build-your-legacy" className="btn-outline">
              Learn more
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
