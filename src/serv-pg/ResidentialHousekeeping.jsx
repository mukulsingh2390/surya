import React from "react";
import "./ResidentialHousekeeping.css";
import residentialHousekeepingImg from "../assets/sec back2.png";

const ResidentialHousekeeping = () => {
  return (
    <section className="res-housekeeping-sec">
      {/* Hero Section */}
      <div
        className="res-housekeeping-hero"
        style={{ backgroundImage: `url(${residentialHousekeepingImg})` }}
      >
        <div className="res-housekeeping-overlay">
          <h1>Residential Housekeeping Services</h1>
          <p>
            Trusted housekeeping solutions for apartments, housing societies,
            villas, and residential complexes.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="res-housekeeping-content">
        <h2>Why Choose Our Residential Housekeeping?</h2>
        <p>
          We provide trained and reliable housekeeping staff to maintain
          cleanliness, hygiene, and comfort in residential spaces, ensuring a
          pleasant living environment.
        </p>

        <ul>
          <li>Apartment & society housekeeping staff</li>
          <li>Daily cleaning & maintenance services</li>
          <li>Waste collection & disposal management</li>
          <li>Common area & amenity cleaning</li>
          <li>Flexible schedules & trusted staff</li>
        </ul>
      </div>
    </section>
  );
};

export default ResidentialHousekeeping;
