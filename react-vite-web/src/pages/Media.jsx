import React from "react";
import "./Media.css";

const Media = () => {
  return (
    <>
      {/* Media Hero Section */}
      <section className="media-hero">
        <img src="/media3.png" alt="Media Banner" />
        <div className="media-hero-overlay">
          <h1></h1>
        </div>
      </section>

      <div className="media">
        <p>
          Explore our latest events, security operations, and company updates.
        </p>

        <div className="media-grid">
          {/* Media Card 1 */}
          <div className="media-card">
            <img src="/about3.jpeg" alt="Security Event" />
            <div className="media-content">
              <h3>Corporate Security Event</h3>
              <span>Jan 2026</span>
            </div>
          </div>

          {/* Media Card 2 */}
          <div className="media-card">
            <img src="/training1.jpeg" alt="Security Training" />
            <div className="media-content">
              <h3>Security Training Program</h3>
              <span>Dec 2025</span>
            </div>
          </div>

          {/* Media Card 3 */}
          <div className="media-card">
            <img src="/site1.jpeg" alt="Site Inspection" />
            <div className="media-content">
              <h3>Site Inspection</h3>
              <span>Nov 2025</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
