import React from "react";
import "./numbers.css";
import { FaUsers, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

const Numbers = () => {
  return (
    <section
      className="numbers-section"
      style={{
        backgroundImage: "url('/deal.png')", // image in public folder
      }}
    >
      <div className="numbers-overlay">

        {/* HEADER */}
        <div className="numbers-header">
          <span className="numbers-subtitle">ACHIEVEMENTS & STATISTICS</span>
          <h2>Our 12 years of Operation</h2>
        </div>

        {/* STATS */}
        <div className="numbers-grid">

          {/* Card 1 */}
          <div className="number-card">
            <h3>1600+</h3>
            <div className="icon-box">
              <FaUsers />
            </div>
            <p>1600+ People Connected</p>
          </div>

          {/* Card 2 */}
          <div className="number-card">
            <h3>12+</h3>
            <div className="icon-box">
              <FaMapMarkerAlt />
            </div>
            <p>12+ Cities</p>
          </div>

          {/* Card 3 */}
          <div className="number-card">
            <h3>70+</h3>
            <div className="icon-box">
              <FaUserTie />
            </div>
            <p>70+ Clients</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Numbers;
