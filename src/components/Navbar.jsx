import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo2.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>

      {/* TOP BAR */}
      <div className="top-bar">

        <div className="top-left">
          <span>Surya Security Services</span>
        </div>

        <div className="top-right">
          <span>Trusted Protection Provider</span>
        </div>

      </div>


      {/* MAIN NAVBAR */}
      <nav className="navbar">

        {/* LOGO */}
        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src={logo} alt="Surya Security Services" />
          </NavLink>
        </div>


        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/career" onClick={closeMenu}>
              Career
            </NavLink>
          </li>

          <li>
            <NavLink to="/media" onClick={closeMenu}>
              Media
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

        </ul>


        {/* HAMBURGER ICON */}
        <div
          className={`menu-icon ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >

          <span></span>
          <span></span>
          <span></span>

        </div>


      </nav>

    </>
  );
};

export default Navbar;