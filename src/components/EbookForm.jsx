import React, { useState } from "react";
import "./EbookForm.css";
import { toast } from "react-toastify";

const EbookForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://konasal-complete-website-backend.onrender.com/api/ebook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
         toast.success(data.message);
        window.location.href = "https://payhip.com/Konasal";
      } else {
          toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ebook-form-container">
      <div className="ebook-form-card">
        <h2 className="ebook-form-title">📘 Claim Your <span>FREE</span> eBook!</h2>
        <p className="ebook-form-subtext">
          Fill in your details to get instant access and start building your legacy.
        </p>

        <form onSubmit={handleSubmit} className="ebook-form-box">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Get My eBook"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EbookForm;
