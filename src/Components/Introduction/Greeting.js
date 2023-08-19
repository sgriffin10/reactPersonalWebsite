// Greeting.js
import React from "react";

function Greeting({ name }) {
  return (
    <h1 className="landing-title">
      Hey, I'm <span>{name}</span> 👋
    </h1>
  );
}

export default Greeting;
