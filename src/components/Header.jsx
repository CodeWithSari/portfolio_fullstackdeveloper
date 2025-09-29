import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";

function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="header">
      <div className="logo">CodeWithSari</div>

      <div className={`nav-links ${mobileOpen ? "active" : ""}`}>
        <RouterLink to="/">Home</RouterLink>

        {location.pathname === "/" ? (
          <ScrollLink to="services" smooth={true} duration={600} offset={-80}>
            Services
          </ScrollLink>
        ) : (
          <RouterLink to="/" state={{ scrollToServices: true }}>
            Services
          </RouterLink>
        )}

        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </header>
  );
}

export default Header;
