import React from "react";
import "./OfficeHousekeeping.css";
import officeHousekeepingImg from "../assets/sec back2.png"; // update image path if needed

const OfficeHousekeeping = () => {
  return (
    <section className="office-housekeeping-sec">
      {/* Hero Section */}
      <div
        className="office-housekeeping-hero"
        style={{ backgroundImage: `url(${officeHousekeepingImg})` }}
      >
        <div className="office-housekeeping-overlay">
          <h1>Office Housekeeping Services</h1>
          <p>
            Professional housekeeping solutions to maintain clean, hygienic,
            and productive office environments.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="office-housekeeping-content">
        <h2>Why Choose Our Office Housekeeping?</h2>
        <p>
          We provide trained housekeeping staff and systematic cleaning
          processes to ensure a neat, organized, and healthy workplace for
          employees and visitors.
        </p>

        <ul>
          <li>Daily office cleaning & maintenance</li>
          <li>Pantry, washroom & common area cleaning</li>
          <li>Trained & uniformed housekeeping staff</li>
          <li>Hygiene & safety compliant procedures</li>
          <li>Flexible cleaning schedules</li>
        </ul>
      </div>
    </section>
  );
};

export default OfficeHousekeeping;
