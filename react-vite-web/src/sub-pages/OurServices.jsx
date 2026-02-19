import React from "react";
import { NavLink } from "react-router-dom";
import "./OurServices.css";
import { FaUserShield, FaBroom, FaUsers } from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="our-services">
      <h2 className="services-title">Our Services</h2>

      <div className="services-cards">

        {/* Card 1 */}
        <div className="service-card active">
          <FaUserShield className="service-icon" />
          <h3>Private Security Service</h3>
          <p>
            This is a comprehensive security service offered to clients who are
            looking for a reliable, professional and trusted solution.
          </p>
          <NavLink to="/services" className="read-more active-link">
            Read more
          </NavLink>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <FaBroom className="service-icon" />
          <h3>House Keeping Services</h3>
          <p>
            House Keeping Services encompasses a wide range of services including
            solid waste management and facility cleaning.
          </p>
          <NavLink to="/services" className="read-more">
            Read more
          </NavLink>
        </div>

        {/* Card 3 */}
        <div className="service-card">
          <FaUsers className="service-icon" />
          <h3>Human Resource Outsourcing Service</h3>
          <p>
            Human Resource outsourcing Service is a rapidly growing industry
            providing professional manpower solutions.
          </p>
          <NavLink to="/services" className="read-more">
            Read more
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default OurServices;
