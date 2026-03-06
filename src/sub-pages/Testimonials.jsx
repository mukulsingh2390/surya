import "./Testimonials.css";

const testimonialsData = [
  {
    text: "We sincerely appreciate Surya Security Services for their uninterrupted, professional, and highly commendable security services, consistently ensuring safety, discipline, and smooth operations at our premises.",
    company: "Nyati Group",
  },
  {
    text: "We highly commend the security team for their dependable service, alertness, and professional conduct, consistently maintaining a safe and secure environment at our facilities.",
    company: "ACC Limited",
  },
  {
    text: "We express our sincere appreciation for the exceptional security support provided, marked by vigilance, integrity, and unwavering commitment to maintaining a secure and well-managed workplace environment.",
    company: "Mantra Properties",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-wrapper">
        <h2 className="testimonials-title">Testimonials</h2>

        <div className="testimonials-container">
          {testimonialsData.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-icon">“</div>

              <p className="testimonial-text">
                {item.text}
              </p>

              <span className="testimonial-company">
                 {item.company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;