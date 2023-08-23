import React from "react";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import Experience from "./Components/Experience/Experience";
import About from "./Components/About/About";

function Landing() {
  return (
    <div>
      <div className="full-viewport-section landing">
        <Header />
        <Introduction />
      </div>
      <div className="full-viewport-section">
        <Experience />
      </div>
      {/* <div className="full-viewport-section landing"> */}
      <div>
        <About />
      </div>
    </div>
  );
}

export default Landing;
