import React, { useState } from "react";
import "./IncomeStreams.css";
import { toast } from "react-toastify";

const IncomeStreamsForm = () => {
    const [selectedStreams, setSelectedStreams] = useState([]);
    const [formData, setFormData] = useState({
        businessIdea: "",
        startupCost: "",
        registration: "",
        agent: "",
    });

    const incomeOptions = [
        "Life Insurance Agent Opportunities (Commission-Based Income)",
        "Digital Products (Passive Income)",
        "Affiliate Marketing (Low Startup, Passive)",
        "Childcare Services or Tutoring (Side Hustle Income)",
        "Home-Based Food or Beauty Services (Flexible, Cultural Niche)",
        "Amazon KDP (Kindle Direct Publishing) (Passive)",
        "Dropshipping or Print-on-Demand Store (Semi-Passive)",
        "Airbnb or Room Rental (Passive to Active)",
        "Transportation Services (Flexible Work)",
        "Create a YouTube or TikTok Channel (Long-Term Passive)",
        "Cleaning or Organizing Business (Low Overhead, High Demand)",
        "Virtual Assistant or Freelance Services (Skill-Based Income)",
        "REITs – Real estate income without direct ownership",
        "U.S. Real Estate Investment Management",
    ];

    const user = JSON.parse(localStorage.getItem("user"));

    const handleCheckboxChange = (option) => {
        if (selectedStreams.includes(option)) {
            setSelectedStreams(selectedStreams.filter((item) => item !== option));
        } else {
            if (selectedStreams.length < 3) {
                setSelectedStreams([...selectedStreams, option]);
            } else {
                toast.warning("You can only select up to 3 income streams.");
            }
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxSubmit = async (e) => {
        e.preventDefault();
        if (!user) return window.location.href = "/login";

        try {
            const res = await fetch("https://konasal-complete-website-backend.onrender.com/api/forms", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: user.id, formType: "checkbox", data: selectedStreams }),
            });
            const result = await res.json();
            toast.success("Checkbox form submitted successfully!");
            setSelectedStreams([]);
        } catch (err) {
            console.error(err);
        }
    };

    const handleInputFormSubmit = async (e) => {
        e.preventDefault();
        if (!user) return window.location.href = "/login";

        try {
            const res = await fetch("https://konasal-complete-website-backend.onrender.com/api/forms", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: user.id, formType: "input", data: formData }),
            });
            const result = await res.json();
            toast.success("Input form submitted successfully!");
            setFormData({ businessIdea: "", startupCost: "", registration: "", agent: "" });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="page-container">
            {/* Top Section */}
            <section className="top-section">
                <div className="topDiv">
                    <h2 className="top-title">
                        OUR POWER-PACKED GUIDE TO MULTIPLE INCOME STREAMS
                    </h2>
                    <p className="top-subtitle">
                        Please select up to three income streams that interest you most, and
                        we’ll be happy to <br />provide you with resources to help you get started.
                    </p>
                </div>

                <div className="formDiv">
                    <form className="checkbox-form" onSubmit={handleCheckboxSubmit}>
                        {incomeOptions.map((option, index) => (
                            <label key={index}>
                                <input
                                    type="checkbox"
                                    checked={selectedStreams.includes(option)}
                                    onChange={() => handleCheckboxChange(option)}
                                />
                                {option}
                            </label>
                        ))}
                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </form>
                </div>
            </section>

            {/* Bottom Section */}
            <div className="btm">
                <section className="bottom-section">
                    <div className="cont">
                        <h3>
                            Do you need <span>Our FREE Starter plan</span>?
                        </h3>
                        <h3>
                            We also can help you develop “Income Stream Starter Guide”
                        </h3>
                        
                        <p>
                            Please provide us with the following
                        </p>
                    </div>

                    <form className="info-form" onSubmit={handleInputFormSubmit}>
                        <input
                            type="text"
                            name="businessIdea"
                            placeholder="Provide us with your Business ideas based on skill level"
                            value={formData.businessIdea}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="startupCost"
                            placeholder="Startup cost estimates"
                            value={formData.startupCost}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="registration"
                            placeholder="Do you need business Registration (e.g., EIN, business registration)"
                            value={formData.registration}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="agent"
                            placeholder="Do you need us to Link you an agent for your business"
                            value={formData.agent}
                            onChange={handleChange}
                        />
                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default IncomeStreamsForm;
