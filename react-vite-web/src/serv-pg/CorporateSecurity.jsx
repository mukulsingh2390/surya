import React from "react";
import "./CorporateSecurity.css";
import corporateSecImg from "../assets/sec back2.png"; // update path if needed

const CorporateSecurity = () => {
  return (
    <section className="corporate-sec">
      {/* Hero Section */}
      <div
        className="corporate-sec-hero"
        style={{ backgroundImage: `url(${corporateSecImg})` }}
      >
        <div className="corporate-sec-overlay">
          <h1>Corporate Security Services</h1>
          <p>
            Professional security solutions for corporate offices, IT parks,
            business centers, and commercial spaces.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="corporate-sec-content">
        <h2>Why Choose Our Corporate Security?</h2>
        <p>
          We provide trained and presentable security personnel combined with
          advanced security systems to safeguard employees, visitors, and
          corporate assets while maintaining a professional environment.
        </p>

        <ul>
          <li>Front desk & lobby security personnel</li>
          <li>Visitor management & access control</li>
          <li>24/7 surveillance & CCTV monitoring</li>
          <li>Emergency response & evacuation support</li>
          <li>Compliance with corporate safety standards</li>
        </ul>
      </div>
    </section>
  );
};

export default CorporateSecurity;
