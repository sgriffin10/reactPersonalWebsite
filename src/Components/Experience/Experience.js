import React, { useState } from "react";
import { experienceData } from "./experienceData";
import SectionTitle from "../SectionTitles";

function Experience() {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const selectedExperience = experienceData[selectedExperienceIndex];

  return (
    <div id="experience" className="experience-section">
      <SectionTitle name="Experience" />
      <div className="experience-container">
        <div className="left-toolbar">
          <ul>
            {experienceData.map((experience, index) => (
              <li
                key={index}
                onClick={() => setSelectedExperienceIndex(index)}
                className={
                  index === selectedExperienceIndex ? "selected-item" : ""
                }
              >
                <div
                  className={
                    index === selectedExperienceIndex
                      ? "active-bar"
                      : "inactive-bar"
                  }
                ></div>
                {experience.company}
              </li>
            ))}
          </ul>
        </div>
        <div className="right-description">
          <div className="header-section">
            <div className="title-dates">
              <h2>{selectedExperience.title}</h2>
              <p>{selectedExperience.dates}</p>
            </div>
            <img
              src={selectedExperience.companyLogo}
              // src="../Images/spur.png"
              alt="Company Logo"
              className="company-logo"
            />
          </div>
          <ul className="description-bullets">
            {selectedExperience.description.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
          <p>
            <b>Technologies Used:</b>
            <br />
            <div className="technologies-list">
              {selectedExperience.technologies.map((tech, index) => (
                <span key={index} className="technology-item">
                  {tech}
                </span>
              ))}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
