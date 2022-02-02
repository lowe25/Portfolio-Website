import React, { useState } from "react";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <ul
          className={isMobile ? "nav-menu-mobile" : "nav-menu"}
          onClick={() => setIsMobile(false)}
        >
          <a href="#home" className="nav-links">
            <li>Home</li>
          </a>
          <a href="#about" className="nav-links">
            <li>About</li>
          </a>
          <a href="#projects" className="nav-links">
            <li>Projects</li>
          </a>
          <a href="#contacts" className="nav-links">
            <li>Contact</li>
          </a>
        </ul>
        <button className="burger-menu" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
