// ActionButtons.js
import React from "react";

function ActionButtons() {
  return (
    <div>
      <a
        href="#about"
        className="contact-btn-fill"
        style={{ margin: "0 10px 10px 0" }}
      >
        Learn more
      </a>
      <a href="#contact" className="contact-btn">
        Get in contact
      </a>
    </div>
  );
}

export default ActionButtons;
