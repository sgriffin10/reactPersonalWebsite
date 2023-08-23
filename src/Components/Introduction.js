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
          <Description text="I'm a technology enthusiast with a knack for blending tech and business and a goal of creating intuitive and efficient solutions to the world's problems." />
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

// "Hello! I'm Spencer, a technology enthusiast with a knack for blending tech and business and a goal of creating intuitive and efficient solutions to the world's problems. Off the keyboard, I enjoy engaging in sports like Soccer and Golf, exploring geopolitics, and cultivating my garden."
