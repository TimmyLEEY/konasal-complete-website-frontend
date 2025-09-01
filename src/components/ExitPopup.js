import React, { useState, useEffect } from "react";
import "./ExitPopup.css";

const ExitPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show popup after refresh if not already shown this session
    const popupShown = sessionStorage.getItem("exitPopupShown");
    if (!popupShown) {
      setShow(true);
      sessionStorage.setItem("exitPopupShown", "true");
    }
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
