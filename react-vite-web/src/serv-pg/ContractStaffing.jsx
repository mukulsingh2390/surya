import React from "react";
import "./ContractStaffing.css";
import contractStaffImg from "../assets/sec back2.png"; // update image path if needed

const ContractStaffing = () => {
  return (
    <section className="contract-sec">
      {/* Hero Section */}
      <div
        className="contract-sec-hero"
        style={{ backgroundImage: `url(${contractStaffImg})` }}
      >
        <div className="contract-sec-overlay">
          <h1>Contract Staffing Services</h1>
          <p>
            Flexible workforce solutions to meet your short-term and long-term
            staffing requirements efficiently.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="contract-sec-content">
        <h2>Why Choose Our Contract Staffing?</h2>
        <p>
          We help businesses scale their workforce with skilled, reliable, and
          pre-verified professionals across multiple industries, ensuring
          operational efficiency and cost control.
        </p>

        <ul>
          <li>Skilled & semi-skilled manpower supply</li>
          <li>Short-term & long-term staffing solutions</li>
          <li>Quick deployment & workforce scalability</li>
          <li>Payroll & compliance management</li>
          <li>Industry-specific staffing support</li>
        </ul>
      </div>
    </section>
  );
};

export default ContractStaffing;
