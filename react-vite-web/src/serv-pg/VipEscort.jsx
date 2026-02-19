import React from "react";
import "./VipEscort.css";
import vipEscortImg from "../assets/sec back2.png"; // update image path if needed

const VipEscort = () => {
  return (
    <section className="vip-escort-sec">
      {/* Hero Section */}
      <div
        className="vip-escort-hero"
        style={{ backgroundImage: `url(${vipEscortImg})` }}
      >
        <div className="vip-escort-overlay">
          <h1>VIP Escort & Protection Services</h1>
          <p>
            Discreet, professional, and reliable protection services for VIPs,
            executives, celebrities, and dignitaries.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="vip-escort-content">
        <h2>Why Choose Our VIP Escort Services?</h2>
        <p>
          Our highly trained escort officers ensure complete personal safety
          through risk assessment, secure movement planning, and professional
          close-protection techniques.
        </p>

        <ul>
          <li>Trained personal protection officers</li>
          <li>Executive & celebrity escort services</li>
          <li>Secure travel & route planning</li>
          <li>Discreet, alert & professional presence</li>
          <li>Emergency response & threat management</li>
        </ul>
      </div>
    </section>
  );
};

export default VipEscort;
