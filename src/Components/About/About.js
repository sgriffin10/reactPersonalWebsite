import React, { useState } from "react";
import SectionTitle from "../SectionTitles";

function About() {
  return (
    <div id="about" className="about-section">
      <SectionTitle name="Contact Me" />
      <div className="about-container">
        <div className="drawing">
          <img
            src="personalPic.jpg"
            alt="Your Image"
            className="personal-pic"
          />
        </div>
        <div className="social-btns">
          <a href="mailto:spencersdgriffin@gmail.com">
            <img
              src="Logos/email.png"
              // src="../Images/spur.png"
              alt="Email"
              className="social-btn"
              //   className="company-logo"
            />
          </a>
          <a
            href="https://github.com/sgriffin10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="Logos/github.png"
              // src="../Images/spur.png"
              alt="Github"
              //   className="company-logo"
              className="social-btn"
            />
          </a>
          <a
            href="https://linkedin.com/in/spencergriffin1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="Logos/li.png"
              // src="../Images/spur.png"
              alt="LinkedIn"
              className="social-btn"
              //   className="company-logo"
            />
          </a>
          <a
            href="Static/Spencer_Griffin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="Logos/cv.png"
              // src="../Images/spur.png"
              alt="cv"
              className="social-btn"
              //   className="company-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
