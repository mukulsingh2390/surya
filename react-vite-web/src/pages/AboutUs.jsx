import React from "react";
import "./AboutUs.css";
import suryasImg from "../assets/suryas.jpeg";

const AboutUs = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <img src="/about.jpeg" alt="About Surya Security Services" />

        <div className="about-hero-overlay">
          <div className="hero-box">
            <h1>About Us</h1>
            <p>
              Professional Security & Housekeeping Services in Maharashtra
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-wrapper">

          {/* LEFT : INFO CARD */}
          <div className="about-info-card">
            <span className="about-tag">WHO WE ARE</span>
            <h2>Surya Security Services</h2>

            <p>
              Surya Security Services is a professionally managed organization
              providing reliable and comprehensive security and housekeeping
              solutions. Based in Pune, we operate across Maharashtra and are
              licensed for private security services statewide.
            </p>

            <p>
              We provide trained armed and unarmed security guards and
              professional housekeeping staff. All personnel are medically fit,
              PASARA trained, and police verified.
            </p>

            <p>
              Our services include residential, commercial, industrial security,
              event security, and modern housekeeping with strict supervision
              and quality control.
            </p>

            <p>
              Regular training in fire fighting, first aid, vigilance, and
              professional conduct ensures discipline and reliability at every
              site.
            </p>
          </div>

          {/* RIGHT : IMAGE CARDS */}
          <div className="about-image-cards">
            <div className="image-card">
              <img src="/about1.jpg" alt="Security Guards" />
            </div>

            <div className="image-card">
              <img src="/about2.jpg" alt="Housekeeping Staff" />
            </div>

            <div className="image-card">
              <img src="/about3.jpeg" alt="Industrial Security" />
            </div>
          </div>

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="about-team-section">
        <div className="team-card-wrapper">

          {/* LEFT IMAGE */}
          <div className="team-image">
            <img src={suryasImg} alt="Leadership Team" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="team-content">
            <span className="team-tag">OUR TEAM</span>

            <h2>Meet Our Leadership</h2>

            <h3>Founder & Managing Director</h3>

            <p>
              With strong industry experience and professional leadership,
              Surya Security Services operates with discipline, integrity,
              and operational excellence.
            </p>

            <p>
              The organization focuses on delivering dependable security and
              housekeeping solutions across Maharashtra with strict compliance,
              training standards, and quality-driven service management.
            </p>

            <p>
              Under visionary leadership, the company continues to grow while
              maintaining client trust, workforce development, and long-term
              service reliability.
            </p>

          </div>

        </div>
      </section>

    </>
  );
};

export default AboutUs;
