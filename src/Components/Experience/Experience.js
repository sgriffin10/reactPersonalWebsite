import React, { useState } from "react";
import { experienceData } from "./experienceData";
import SectionTitle from "../SectionTitles";

function Experience() {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const selectedExperience = experienceData[selectedExperienceIndex];

  return (
    <div className="experience-section">
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
            Technologies Used:
            <br />
            {selectedExperience.technologies}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
