import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT : LOGO + ABOUT */}
        <div className="footer-about">
          <img
            src={logo}
            alt="Rakshak Group Logo"
            className="footer-logo"
          />
          <p>
            Surya Security Services is a professional security services organization based
            in Pune, serving the entire Maharashtra state with reliable and
            high-quality security solutions.
          </p>
          <a href="/about" className="about-link">About Us</a>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="/services">Private Security Service</a></li>
            <li><a href="/services">House Keeping Services</a></li>
            <li><a href="/services">Human Resource</a></li>
            <li><a href="/services">Outsourcing Service</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/media">NewsLetters & Media</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* 🔽 BOTTOM COPYRIGHT (ADDED ONLY THIS) */}
      <div className="footer-bottom">
        © 2026 CodeOne Technology. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
