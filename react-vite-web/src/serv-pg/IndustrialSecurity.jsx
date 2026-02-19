import React from "react";
import "./IndustrialSecurity.css";
import indusSecImg from "../assets/sec back3.png";

const IndustrialSecurity = () => {
  return (
    <section className="indus-sec">
      {/* Hero Section */}
      <div
        className="indus-sec-hero"
        style={{ backgroundImage: `url(${indusSecImg})` }}
      >
        <div className="indus-sec-overlay">
          <h1>Industrial Security Services</h1>
          <p>
            Comprehensive protection solutions for factories, warehouses,
            plants, and industrial facilities.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="indus-sec-content">
        <h2>Why Choose Our Industrial Security?</h2>
        <p>
          We provide highly trained industrial security personnel, advanced
          surveillance, access control systems, and 24/7 monitoring to ensure
          complete safety of your assets, workforce, and operations.
        </p>

        <ul>
          <li>Trained & disciplined security guards</li>
          <li>Perimeter & access control management</li>
          <li>Fire, safety & emergency response readiness</li>
          <li>CCTV monitoring & reporting</li>
          <li>Compliance with industrial safety standards</li>
        </ul>
      </div>
    </section>
  );
};

export default IndustrialSecurity;
