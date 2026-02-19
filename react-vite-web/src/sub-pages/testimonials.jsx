import "./Testimonials.css";

const testimonialsData = [
  {
    text: "We would like to praise SIS for there uninterrupted and commendable services",
    company: "SBI Bank",
  },
  {
    text: "Thanks for the security support received during this unprecedented lockdown situation of managing COVID-19",
    company: "Accenture",
  },
  {
    text: "We appreciate the efforts and security support that we are getting from SIS",
    company: "Amazon",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>

      <div className="testimonials-container">
        {testimonialsData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-icon">“</div>
            <p className="testimonial-text">{item.text}</p>
            <span className="testimonial-company">{item.company}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
