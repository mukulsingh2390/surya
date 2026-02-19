import React from "react";
import "./ManpowerSupply.css";
import manpowerImg from "../assets/sec back2.png"; // update image path if needed

const ManpowerSupply = () => {
  return (
    <section className="manpower-sec">
      {/* Hero Section */}
      <div
        className="manpower-sec-hero"
        style={{ backgroundImage: `url(${manpowerImg})` }}
      >
        <div className="manpower-sec-overlay">
          <h1>Manpower Supply Services</h1>
          <p>
            Reliable workforce solutions across industries to support operations,
            productivity, and business growth.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="manpower-sec-content">
        <h2>Why Choose Our Manpower Supply?</h2>
        <p>
          We provide skilled, semi-skilled, and unskilled manpower tailored to
          your business needs, ensuring efficiency, reliability, and workforce
          continuity.
        </p>

        <ul>
          <li>Skilled, semi-skilled & unskilled manpower</li>
          <li>Industrial, commercial & office staffing</li>
          <li>Quick deployment & flexible workforce</li>
          <li>Attendance, payroll & compliance support</li>
          <li>Cost-effective manpower solutions</li>
        </ul>
      </div>
    </section>
  );
};

export default ManpowerSupply;
