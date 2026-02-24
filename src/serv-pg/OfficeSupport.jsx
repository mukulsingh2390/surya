import React from "react";
import "./OfficeSupport.css";
import officeSupportImg from "../assets/sec back2.png"; // update image path if needed

const OfficeSupport = () => {
  return (
    <section className="office-support-sec">
      {/* Hero Section */}
      <div
        className="office-support-hero"
        style={{ backgroundImage: `url(${officeSupportImg})` }}
      >
        <div className="office-support-overlay">
          <h1>Office Support Services</h1>
          <p>
            Reliable office support staff to ensure smooth daily operations and
            efficient workplace management.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="office-support-content">
        <h2>Why Choose Our Office Support Services?</h2>
        <p>
          We provide trained and dependable office support personnel who assist
          with administrative tasks, office maintenance, and day-to-day
          operational support.
        </p>

        <ul>
          <li>Office assistants & administrative support staff</li>
          <li>Receptionists & front desk executives</li>
          <li>Data entry & back-office support</li>
          <li>Document handling & file management</li>
          <li>Flexible staffing solutions</li>
        </ul>
      </div>
    </section>
  );
};

export default OfficeSupport;
