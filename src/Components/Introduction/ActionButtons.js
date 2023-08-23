// ActionButtons.js
import React from "react";
import { Link } from "react-scroll";

function ActionButtons() {
  return (
    <div>
      <a
        href="#experience"
        className="contact-btn-fill"
        style={{ margin: "0 10px 10px 0" }}
      >
        <Link
          to="experience"
          smooth={true}
          duration="1000"
          // className="contact-btn-fill"
        >
          Learn More
        </Link>
      </a>
      <a href="#about" className="contact-btn">
        <Link to="about" smooth={true} duration="1200" className="">
          Contact Me
        </Link>
      </a>
    </div>
  );
}

export default ActionButtons;
