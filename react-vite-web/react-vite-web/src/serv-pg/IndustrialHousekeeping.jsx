import React from "react";
import "./IndustrialHousekeeping.css";
import housekeepingImg from "../assets/sec back2.png"; // update image path if needed

const IndustrialHousekeeping = () => {
  return (
    <section className="housekeeping-sec">
      {/* Hero Section */}
      <div
        className="housekeeping-sec-hero"
        style={{ backgroundImage: `url(${housekeepingImg})` }}
      >
        <div className="housekeeping-sec-overlay">
          <h1>Industrial Housekeeping Services</h1>
          <p>
            Professional cleaning and maintenance services for factories,
            warehouses, plants, and industrial facilities.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="housekeeping-sec-content">
        <h2>Why Choose Our Industrial Housekeeping?</h2>
        <p>
          We deliver systematic, safe, and efficient housekeeping services to
          maintain cleanliness, hygiene, and compliance in industrial
          environments, enhancing productivity and workplace safety.
        </p>

        <ul>
          <li>Skilled & trained housekeeping staff</li>
          <li>Machine, floor & industrial area cleaning</li>
          <li>Waste management & disposal services</li>
          <li>Safety-compliant cleaning procedures</li>
          <li>Custom schedules for continuous operations</li>
        </ul>
      </div>
    </section>
  );
};

export default IndustrialHousekeeping;
