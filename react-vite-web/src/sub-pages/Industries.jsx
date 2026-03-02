import React from "react";
import "./Industries.css";

const industriesData = [
  { title: "AUTOMOBILES", img: "/industries/automobiles.png" },
  { title: "EDUCATIONAL INSTITUTIONS", img: "/industries/education4.png" },
  { title: "BANKING", img: "/industries/bank4.png" },
  { title: "IT", img: "/industries/it4.png" },
  { title: "GOVERNMENT", img: "/industries/gov.png" },
  { title: "HOSPITALS", img: "/industries/hospital4.png" },
  { title: "MANUFACTURING", img: "/industries/MANUFACTURING.jpg.jpeg" },
  { title: "CONSTRUCTION", img: "/industries/construction4.png" },
  { title: "RETAIL", img: "/industries/retails.png" },
  { title: "LOGISTICS", img: "/industries/logistics.png" },
  { title: "EVENTS", img: "/industries/event.png" },
  { title: "RESIDENTIAL", img: "/industries/RECDENTIALO.png" }
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
