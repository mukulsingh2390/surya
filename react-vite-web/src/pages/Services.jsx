import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <>
      {/* Services Hero Section */}
      <section className="services-hero">
        <img src="/servo.jpeg" alt="Our Services" />
        <div className="services-hero-overlay">
          <h1></h1>
        </div>
      </section>

      {/* Services Content */}
      <section className="services">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            We provide reliable and professional security solutions tailored to
            your needs.
          </p>
        </div>

        {/* ===== Private Security Service ===== */}
        <h3 className="services-subtitle">Private Security Services</h3>
        <div className="services-grid">
          <Link to="/serv-pg/Industrial-Security" className="service-card">
            <img src="/services/iss2.png" alt="" />
            <p>Security solutions for factories and industrial facilities.</p>
            <h4>Industrial Security Services</h4>
          </Link>

          <Link to="/serv-pg/Bank-Security" className="service-card">
            <img src="/services/banks.png" alt="" />
            <p>Highly trained guards for banks and financial institutions.</p>
            <h4>Bank Security Services</h4>
          </Link>

          <Link to="/serv-pg/corporate-security" className="service-card">
            <img src="/services/It1.png" alt="" />
            <p>Office, IT park, and corporate building protection.</p>
            <h4>Corporate Security Services</h4>
          </Link>

          <Link to="/serv-pg/bouncers-service" className="service-card">
            <img src="/services/events3.png" alt="" />
            <p>Event security, crowd control, and venue protection.</p>
            <h4>Bouncers Services</h4>
          </Link>

          <Link to="/serv-pg/vip-escort" className="service-card">
            <img src="/services/vip.png" alt="" />
            <p>Bodyguards and personal protection officers.</p>
            <h4>VIP Escort Service</h4>
          </Link>

          <Link to="/serv-pg/residential-security" className="service-card">
            <img src="/services/residental.png" alt="" />
            <p>Security for societies, apartments, and villas.</p>
            <h4>Residential Security</h4>
          </Link>
        </div>

        {/* ===== House Keeping Services ===== */}
        <h3 className="services-subtitle">House Keeping Services</h3>
        <div className="services-grid">
          <Link to="/serv-pg/office-housekeeping" className="service-card">
            <img src="/services/officeh.png" alt="" />
            <p>Daily cleaning and maintenance of office spaces.</p>
            <h4>Office Housekeeping</h4>
          </Link>

          <Link to="/serv-pg/industrial-housekeeping" className="service-card">
            <img src="/services/industrialh.png" alt="" />
            <p>Factory and warehouse cleaning services.</p>
            <h4>Industrial Housekeeping</h4>
          </Link>

          <Link to="/serv-pg/Residential-Housekeeping" className="service-card">
            <img src="/services/househ.png" alt="" />
            <p>Home and apartment cleaning services.</p>
            <h4>Residential Housekeeping</h4>
          </Link>
        </div>

        {/* ===== Human Resource Outsourcing ===== */}
        <h3 className="services-subtitle">
          Human Resource Outsourcing Services
        </h3>
        <div className="services-grid">
          <Link to="/serv-pg/manpower-supply" className="service-card">
            <img src="/services/mansupply.png" alt="" />
            <p>Skilled and unskilled workforce supply.</p>
            <h4>Manpower Supply</h4>
          </Link>

          <Link to="/serv-pg/contract-staffing" className="service-card">
            <img src="/services/staffing.png" alt="" />
            <p>Flexible staffing solutions for businesses.</p>
            <h4>Contract Staffing</h4>
          </Link>

          <Link to="/serv-pg/office-support" className="service-card">
            <img src="/services/support.png" alt="" />
            <p>End-to-end Customer Support and Customers compliance services.</p>
            <h4>Office Support Services</h4>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
