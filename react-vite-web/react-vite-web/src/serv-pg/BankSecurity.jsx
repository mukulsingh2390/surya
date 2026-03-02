import React from "react";
import "./BankSecurity.css";
import bankSecImg from "../assets/sec back2.png"; // update image path if needed

const BankSecurity = () => {
  return (
    <section className="bank-sec">
      {/* Hero Section */}
      <div
        className="bank-sec-hero"
        style={{ backgroundImage: `url(${bankSecImg})` }}
      >
        <div className="bank-sec-overlay">
          <h1>Bank & Financial Security Services</h1>
          <p>
            Robust security solutions for banks, ATMs, financial institutions,
            and cash-handling environments.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bank-sec-content">
        <h2>Why Choose Our Bank Security?</h2>
        <p>
          Our bank security services are designed to protect financial assets,
          staff, and customers through highly trained guards, strict access
          control, and real-time surveillance systems.
        </p>

        <ul>
          <li>Trained armed & unarmed bank security guards</li>
          <li>ATM & vault security management</li>
          <li>Customer & staff safety assurance</li>
          <li>CCTV surveillance & incident reporting</li>
          <li>Compliance with banking security norms</li>
        </ul>
      </div>
    </section>
  );
};

export default BankSecurity;
