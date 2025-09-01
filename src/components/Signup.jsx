import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; // ✅ import toast

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("https://konasal-complete-website-backend.onrender.com/api/auth/register", {
        name,
        email,
        password,
      });

      if (res.status === 201) {
        toast.success("✅ Account created successfully!");
        navigate("/login"); // redirect to login page
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Something went wrong. Try again."
      );
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
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? (
                <div className="spinner"></div> // ✅ Spinner here
              ) : (
                "Create Account"
              )}
            </button>

            <hr />

            <Link to="/login">
              <button type="button" className="create-account">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
