import React from "react";
import { Link } from "react-scroll";

function NavItem({ href, duration, children, className = "" }) {
  return (
    <li>
      <Link
        to={href.replace("#", "")}
        smooth={true}
        duration={duration}
        className={className}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
