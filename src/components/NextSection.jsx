import React from "react";
import "./NextSection.css";
import incomeImage from "../assets/Screenshot_20250820-163037.jpg"; 
import { useNavigate } from "react-router-dom";


const NextSection = () => {
      const navigate = useNavigate();

  const goToPage = () => {
    navigate("/build-your-legacy"); 
  };
    return (
        <section className="next-section">
            <div className="next-section-container">
                {/* Left Image */}
                <div className="next-section-image">
                    <img src={incomeImage} alt="Income Strategy" />
                </div>

                {/* Right Content */}
                <div className="next-section-content">
                    <h2>BUILD WEALTH THROUGH SMART, DIVERSE INCOME STRATEGIES</h2>
                    <p>
                        KONASAL Legacy Partners provides tools, resources, and education —
                        not financial services — to help you confidently pursue multiple
                        income streams.
                    </p>
                    <button onClick={goToPage}>Explore Multiple Streams of Income</button>
                </div>
            </div>
        </section>
    );
};

export default NextSection;
