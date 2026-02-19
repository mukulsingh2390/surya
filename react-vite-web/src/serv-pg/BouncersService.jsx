import React from "react";
import "./BouncersService.css";
import bouncersImg from "../assets/sec back2.png"; // update path if needed

const BouncersService = () => {
  return (
    <section className="bouncers-sec">
      {/* Hero Section */}
      <div
        className="bouncers-sec-hero"
        style={{ backgroundImage: `url(${bouncersImg})` }}
      >
        <div className="bouncers-sec-overlay">
          <h1>Bouncers & Event Security Services</h1>
          <p>
            Professional crowd control and security services for clubs, events,
            hotels, and private functions.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bouncers-sec-content">
        <h2>Why Choose Our Bouncers?</h2>
        <p>
          Our trained bouncers and event security staff ensure safety, discipline,
          and smooth crowd management while maintaining a professional and
          courteous presence.
        </p>

        <ul>
          <li>Physically fit & professionally trained bouncers</li>
          <li>Club, bar & nightlife security</li>
          <li>Event crowd control & access management</li>
          <li>VIP protection & escort services</li>
          <li>Emergency handling & conflict management</li>
        </ul>
      </div>
    </section>
  );
};

export default BouncersService;
