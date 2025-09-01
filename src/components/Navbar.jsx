import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/KONASAL LOGO 1_copy.PNG"; 
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check login status on mount
  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      setIsLoggedIn(true);
      if (user.role === "admin") {
        setIsAdmin(true);
      }
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on left */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Konasal Logo" />
        </Link>

        {/* Right side (links + profile) */}
        <div className="nav-right">
          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <Link to="/about">About</Link>
            <Link to="/#service" className="active-link">Services</Link>
            <a href="mailto:info@konasallp.com">Contact Us</a>

            {!isLoggedIn && (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}

            {isLoggedIn && (
              <>
                {isAdmin && <Link to="/konal">Admin Dashboard</Link>}
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </>
            )}
          </div>

          {isLoggedIn && (
            <div className="profile-icon">
              <FaUserCircle size={28} color="#1a1a3c" />
            </div>
          )}

          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
