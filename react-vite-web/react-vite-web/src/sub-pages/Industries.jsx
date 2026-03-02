import React from "react";
import "./Industries.css";

const industriesData = [
  { title: "AUTOMOBILES", img: "/industries/auto.png" },
  { title: "EDUCATIONAL INSTITUTIONS", img: "/industries/edu4.png" },
  { title: "BANKING", img: "/industries/banking.png" },
  { title: "IT", img: "/industries/it.png" },
  { title: "GOVERNMENT", img: "/industries/govern.png" },
  { title: "HOSPITALS", img: "/industries/hospital.png" },
  { title: "MANUFACTURING", img: "/industries/mfg2.png" },
  { title: "CONSTRUCTION", img: "/industries/construction.png" },
  { title: "RETAIL", img: "/industries/retail.png" },
  { title: "LOGISTICS", img: "/industries/logi54.png" },
  { title: "EVENTS", img: "/industries/events23.png" },
  { title: "RESIDENTIAL", img: "/industries/resid.png" }
];

const Industries = () => {
  return (
    <section className="industries-section">
      <h2 className="industries-title">
        Industries <span>We Serve</span>
      </h2>

      <div className="industries-grid">
        {industriesData.map((item, index) => (
          <div className="industry-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="industry-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
