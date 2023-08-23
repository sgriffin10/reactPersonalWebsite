import React from "react";
import NavItem from "./NavItem";

function Header() {
  return (
    <header>
      <nav class="header desktop-menu">
        <ul class="horizontal-list">
          {/* <NavItem href="#landing-section" duration="400">
            Home
          </NavItem> */}
          {/* <NavItem href="#about" duration="600">
            About
          </NavItem>
          <NavItem href="#projects" duration="800">
            Projects
          </NavItem> */}
          <NavItem href="#experience" duration="1000" className="nav-btn">
            Experience
          </NavItem>
          <NavItem href="#about" duration="1200" className="nav-btn">
            About Me
          </NavItem>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
