import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 👁️ states for toggling visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("❌ Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("https://konasal-complete-website-backend.onrender.com/api/auth/register", {
        name,
        email,
        password,
      });

      if (res.status === 201) {
        toast.success("✅ Account created successfully!");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        {/* Left side text */}
        <div className="login-left">
          <h1>KONASAL</h1>
          <p>
            Helping Black immigrants turn struggle into strategy & legacy.
            Our hustle is sacred.
          </p>
        </div>

        {/* Right side form */}
        <div className="login-right">
          <form className="login-form" onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password Input */}
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* Confirm Password Input */}
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? <div className="spinner"></div> : "Create Account"}
            </button>

            <hr />

            <button
              id="login"
              type="button"
              className="login-btn"
              onClick={login}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
