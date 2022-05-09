import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="project-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="open-source-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Open Source
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
