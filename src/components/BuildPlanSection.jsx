import React from "react";
import "./BuildPlanSection.css";
import bgImage from "../assets/t-31-1024x576.webp"; 
import { useNavigate } from "react-router-dom";

const BuildPlanSection = () => {

      const navigate = useNavigate();

  const goToPage = () => {
    navigate("/build-your-legacy");
  };

    return (
        <section
            className="build-plan-section"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgImage})` }}
        >
            <div className="content">
                <p>
                    <strong>At KONASAL Legacy Partners</strong>, we believe every immigrant deserves more
                    than just survival—you deserve stability, security, and the opportunity to build
                    lasting wealth.
                </p>
                <p>
                    This page is your starting point to explore multiple income streams both active
                    and passive that can help you take control of your financial future.
                </p>
                <p>
                    Whether you’re looking to earn extra income, build generational wealth, or simply
                    create more breathing room in your budget, you’ll find practical, low-barrier ideas
                    designed for your unique journey.
                </p>
                <p>
                    Select the opportunities that interest you most, and we’ll send you the tools and
                    resources to help you get started one step at a time.
                </p>
                <button onClick={goToPage} className="cta-btn">Let’s build your legacy together</button>
                {/* <Link className="cta-btn">Let’s build your legacy together</Link> */}
            </div>
        </section>
    );
};

export default BuildPlanSection;
