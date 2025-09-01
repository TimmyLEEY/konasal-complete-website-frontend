import React from "react";
import "./FreeEbookSection.css";
import ebookCover from "../assets/paycheck to paycheck book cover.jpg"; // replace with your actual image

const FreeEbookSection = () => {
  return (
    <section className="ebook-section">
      <div className="ebook-container">
        {/* Left: Book Image */}
        <div className="ebook-image">
          <img src={ebookCover} alt="How to Escape Paycheck to Paycheck" />
        </div>

        {/* Right: Text + Button */}
        <div className="ebook-text">
          <h2>Break Free from Financial Struggle</h2>
          <p>
            Download our FREE eBook to learn simple steps to rebuild your finances 
            and take control of your money starting now
          </p>
          <a href="https://payhip.com/KonasalLegacyPartners" className="ebook-btn">
            GRAB YOUR FREE E-BOOK NOW!
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreeEbookSection;
