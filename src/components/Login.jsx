import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // ✅ state for toggle

  const createAccount = () => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      setLoading(true);
      const res = await axios.post(
        "https://konasal-complete-website-backend.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      const { token, user } = res.data;
      localStorage.setItem("userToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "admin") {
        navigate("/konal");
      } else {
        navigate("/");
      }

      window.location.reload();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-left">
          <h1>KONASAL</h1>
          <p>Helping Black immigrants turn struggle into strategy & legacy.</p>
        </div>

        <div className="login-right">
          <form className="login-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email Address" required />

            {/* ✅ Password field with toggle */}
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {/* ✅ Loader inside button */}
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? <div className="spinner"></div> : "Login"}
            </button>

            <Link
              to="/forgot-password"
              style={{ textDecoration: "underline" }}
              id="forgetPassword"
            >
              Forgot Password?
            </Link>

            <hr />

            <button
              onClick={createAccount}
              type="button"
              className="create-account"
            >
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
