import React from "react";
import "./AboutUs.css";
import suryasImg from "../assets/suryas.jpeg";

const AboutUs = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <img src="/aboutmain.jpeg" alt="About Surya Security Services" />
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

        {/* MEMBER 1 */}
        <div className="team-card-wrapper">
          <div className="team-image">
            <img src={suryasImg} alt="Surya" />
          </div>

          <div className="team-content">
            <span className="team-tag">OUR TEAM</span>
            <h2>Meet Our Leadership</h2>

            <h3>Surya, Founder & Managing Director</h3>

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

       {/* MEMBER 2 */}
<div className="team-card-wrapper reverse">
  <div className="team-image">
    <img src="/narvekar.jpeg" alt="Operations Manager" />
  </div>

  <div className="team-content">
    <h3>Amol Narvekar</h3>
    <h4>Operations Manager / Surya Security Services</h4>

    <p>
      Results-driven Operations Manager with over 17 years of extensive
      experience in the security and facility management industry.
    </p>

    <p>
      Proven expertise in client relationship management, staff supervision,
      and end-to-end facility management services.
    </p>

    <p>
      Adept at optimizing operations, ensuring service excellence, and
      maintaining strong client satisfaction through effective team
      leadership and strategic planning.
    </p>
  </div>
</div>
        {/* MEMBER 3 */}
        <div className="team-card-wrapper">
          <div className="team-image">
            <img src="/khade.jpeg" alt="Field Executive" />
          </div>

          <div className="team-content">
  <h3>Pradeep Khade</h3>
  <h4>Field Executive, Surya Security Services</h4>

  <p>
    A dedicated and result-oriented professional with 12 years of extensive
    experience in the Security and Facility Management industry.
  </p>

  <p>
    Expertise in manpower sourcing, efficient deployment, and end-to-end site
    management.
  </p>

  <p>
    Proven ability to handle multiple sites, ensure smooth operations, and
    maintain high service standards.
  </p>

  <p>
    Strong reporting, coordination, and problem-solving skills with a focus on
    client satisfaction and operational excellence.
  </p>
</div>
        </div>

        {/* MEMBER 4 */}
        <div className="team-card-wrapper reverse">
          <div className="team-image">
            <img src="/bhise.jpeg" alt="Field Executive" />
          </div>

         <div className="team-content">
  <h3>Swapnil Bhise</h3>
  <h4>Field Executive, Surya Security Services</h4>

  <p>
    Experienced Field Executive with 8 years in Security & Facility Management.
  </p>

  <p>
    Skilled in manpower sourcing, deployment, and site operations.
  </p>

  <p>
    Strong in reporting, coordination, and ensuring smooth and efficient
    service delivery.
  </p>
</div>
        </div>

        {/* MEMBER 5 */}
        <div className="team-card-wrapper">
          <div className="team-image">
            <img src="/sable.jpeg" alt="Client Manager" />
          </div>

          <div className="team-content">
  <h3>Mr. Sable D.D</h3>
  <h4>Ex-Indian Army JCO | Business Marketing Head</h4>

  <p>
    Ex-Indian Army JCO with 30+ years of distinguished experience in
    administration, technical, and medical operations across diverse environments.
  </p>

  <p>
    Brings 18+ years of corporate leadership as ASM/Marketing Manager,
    successfully managing PAN India security operations with strong command over
    compliance, execution, and strategic client management.
  </p>

  <p>
    Demonstrated expertise in business development, operational excellence, and
    client engagement—adept at lead conversion, relationship management, and
    driving performance through effective team coordination.
  </p>

  <p>
    Currently serving as Business Marketing Head, consistently delivering
    measurable growth, strengthening client partnerships, and contributing to
    organizational expansion.
  </p>
</div>
        </div>

      </section>
    </>
  );
};

export default AboutUs;