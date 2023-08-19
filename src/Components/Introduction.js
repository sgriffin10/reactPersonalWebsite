// Landing.js
import React from "react";
import Greeting from "./Introduction/Greeting";
import Description from "./Introduction/Description";
import ActionButtons from "./Introduction/ActionButtons";
import LandingImage from "./Introduction/LandingImage";
import animeImage from "../Images/suit_pic.jpg";

function Introduction() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col aos-init aos-animate"
          id="col-left"
          data-aos="zoom-out-right"
        >
          <Greeting name="Spencer" />
          <Description text="Welcome to my website! Feel free to contact me at spencersdgriffin@gmail.com, 617-893-1229 or any of the links below..." />
          <ActionButtons />
        </div>
        <div className="col aos-init aos-animate" data-aos="zoom-out-left">
          <LandingImage src={animeImage} alt="illustration-landing" />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
