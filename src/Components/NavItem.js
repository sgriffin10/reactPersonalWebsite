import React from "react";

function NavItem({ href, children, duration, className = "" }) {
  return (
    <li data-aos="fade-down" data-aos-duration={duration}>
      <a href={href} className={`${className}`}>
        {children}
      </a>
    </li>
  );
}

export default NavItem;
