import React from "react";
import "./StruggleSection.css";
import img1 from "../assets/PERPETUAL-INVENTORY.png"; // top right
import img2 from "../assets/networking-7.jpg"; // middle
import img3 from "../assets/download (3).jpeg"; // bottom right
import { Link } from "react-router-dom";

const StruggleSection = () => {
  return (
    <section className="struggle-section">
      <div className="struggle-text">
        <h2>STRUGGLING WITH<br />BILLS, DEBT, OR<br />UNCERTAINTY?</h2>
        <p>
          You’re not alone and you don’t have to stay stuck. <br />
          At Konasal Legacy Partners, we help immigrants and working-class families
          move from paycheck-to-paycheck to legacy-building.
        </p>
        <Link to="/build-your-plan" className= "struggle-btn">Build your plan. Secure your future</Link>
      </div>

      <div className="struggle-images">
        <img src={img1} alt="Workers" className="circle top" />
        <img src={img2} alt="Meeting" className="circle middle" />
        <img src={img3} alt="Businessman" className="circle bottom" />
      </div>
    </section>
  );
};

export default StruggleSection;
