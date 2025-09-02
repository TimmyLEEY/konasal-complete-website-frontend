import React, { useState, useEffect } from "react";
import "./ExitPopup.css";

const ExitPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleExitIntent = (e) => {
      // Detect if user moves mouse near top of screen
      if (e.clientY <= 50) {
        const lastShown = localStorage.getItem("exitPopupLastShown");
        const now = Date.now();

        // Check if popup was shown in the last 5 minutes
        if (!lastShown || now - lastShown > 5 * 60 * 1000) {
          setShow(true);
          localStorage.setItem("exitPopupLastShown", now.toString());
        }
      }
    };

    document.addEventListener("mouseout", handleExitIntent);

    return () => {
      document.removeEventListener("mouseout", handleExitIntent);
    };
  }, []);

  const handleClose = () => setShow(false);

  return (
    show && (
      <div className="popup-overlay">
        <div className="popup-box animate-popup">
          <button className="close-btn" onClick={handleClose}>
            ×
          </button>
          <h2 className="popup-title">
            🎉 Get Your <span className="highlight">FREE</span> eBook!
          </h2>
          <p>
            Before you leave, <b>download our exclusive eBook</b> to help you escape the{" "}
            <b>paycheck-to-paycheck cycle</b> and start{" "}
            <span className="highlight">building wealth & legacy</span> today.
          </p>
          <button
            className="popup-btn"
            onClick={() => (window.location.href = "/ebook-form")}
          >
            Claim Your Free Copy
          </button>
        </div>
      </div>
    )
  );
};

export default ExitPopup;
