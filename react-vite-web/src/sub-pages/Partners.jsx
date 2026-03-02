import React from "react";
import "./Partners.css";

const partners = [
  "/partners/sjpl.png",       // SJPL Sonigara Jewellers
  "/partners/mantra.jpeg",     // Mantra
  "/partners/acc.png",        // ACC Cement
  "/partners/nyati.jpeg",      // Nyati Group
  "/partners/basil.jpeg",      // Basil Group
  "/partners/sonai.jpeg",      // Sonai Infra
  "/partners/nuvoco.png",     // Nuvoco Navgati
  "/partners/sonigara.png",   // Sonigara Jewellers
  "/partners/lafarge.png",    // Lafarge
  "/partners/vj.jpeg",         // Vj

];

const Partners = () => {
  return (
    <section className="partners-section">
      <h2 className="partners-title">Our Clients & Partners</h2>

      <div className="partners-slider">
        <div className="partners-track">

          {/* First set */}
          {partners.map((logo, index) => (
            <div className="partner-card" key={index}>
              <img src={logo} alt={`partner-${index}`} />
            </div>
          ))}

          {/* Duplicate set for smooth infinite scroll */}
          {partners.map((logo, index) => (
            <div className="partner-card" key={`duplicate-${index}`}>
              <img src={logo} alt={`partner-duplicate-${index}`} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Partners;