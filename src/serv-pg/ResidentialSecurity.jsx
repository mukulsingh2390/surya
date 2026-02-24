import React from "react";
import "./ResidentialSecurity.css";
import residentialSecurityImg from "../assets/sec back2.png"; // update image path if needed

const ResidentialSecurity = () => {
  return (
    <section className="res-security-sec">
      {/* Hero Section */}
      <div
        className="res-security-hero"
        style={{ backgroundImage: `url(${residentialSecurityImg})` }}
      >
        <div className="res-security-overlay">
          <h1>Residential Security Services</h1>
          <p>
            Trusted security solutions for apartments, housing societies,
            villas, and residential complexes.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="res-security-content">
        <h2>Why Choose Our Residential Security?</h2>
        <p>
          We provide trained, disciplined, and courteous security guards to
          ensure the safety of residents, visitors, and property while
          maintaining a friendly and professional environment.
        </p>

        <ul>
          <li>Apartment & society security guards</li>
          <li>Visitor entry & access control management</li>
          <li>24/7 surveillance & CCTV monitoring</li>
          <li>Emergency response & incident handling</li>
          <li>Round-the-clock residential protection</li>
        </ul>
      </div>
    </section>
  );
};

export default ResidentialSecurity;
