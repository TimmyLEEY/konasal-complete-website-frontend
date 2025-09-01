import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import wfgLogo from "../assets/WFG LOGO.png";
import equisLogo from "../assets/EQUIS FINANCIAL LOGO (1).png";
import fgLogo from "../assets/F&G_Logo (1).svg";
import aigLogo from "../assets/AIG_logo.svg (1).png";
import mutualLogo from "../assets/MoO_VertLogo_654C (1).png";
import { Link, useNavigate } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Row 1 - Left content */}
                <div className="footer-row">
                    <h2>KONASAL LEGACY PARTNERS © 2025</h2>

                    <MdEmail className="email-icon" />
                    <a id="mail" href="mailto:info@konasallp.com" className="email-text">
                        info@konasallp.com
                    </a>

                    <div className="logo-row">
                        <img src={wfgLogo} alt="World Financial Group" />
                        <img src={equisLogo} alt="Equis Financial" />
                    </div>

                    <div className="logo-row">
                        <img src={fgLogo} alt="FG" />
                        <img src={aigLogo} alt="AIG" />
                        <img src={mutualLogo} alt="Mutual of Omaha" />
                    </div>
                </div>

                {/* Row 2 - Right content */}
                <div className="footer-row">
                    <h2>Follow Us:</h2>

                    <div className="social-icons-row">
                        <a href="https://www.facebook.com/share/16jnksTa7b/" className="facebook">
                            <div className="social-item">
                                <FaFacebookF className="social-icon" />
                                <span>Facebook</span>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/konasallegacypartners?igsh=ZWlvdnhkbmQ3bnQy" className="instagram">
                            <div className="social-item">
                                <FaInstagram className="social-icon" />
                                <span>Instagram</span>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/company/konasal-legacy-partners/" className="linkedin">
                            <div className="social-item">
                                <FaLinkedinIn className="social-icon" />
                                <span>LinkedIn</span>
                            </div>
                        </a>
                    </div>

                    <Link to="/privacy-policy" className="policy-link">Privacy Policy</Link>
                    <Link to="/terms-of-use" className="policy-link">Terms of use</Link>
                
                </div>

            </div>
        </footer>
    );
};

export default Footer;
