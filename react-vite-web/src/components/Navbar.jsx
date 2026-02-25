import "./Navbar.css";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-left">
          <FaMapMarkerAlt />
          <span>
            Office No 201, 10 Square Building, Near Mount Carmel School,
            Lulla Nagar, Pune - 411040
          </span>
        </div>

        <div className="top-right">
          <FaPhoneAlt />
          <span>+91 9922155556 / </span>
          <span>+91 9822146056</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Surya Security Services" />
          </NavLink>
        </div>

        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/media">Media</NavLink></li>
          <li><NavLink to="/career">Career</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
