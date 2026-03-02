import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <span className="contact-subtitle">CONTACT US</span>
      <h2 className="contact-title">How can we help</h2>

      {/* Top Section */}
      <div className="contact-top">
        {/* Address Card */}
        <div className="contact-card">
          <h4>Surya Security Services Office</h4>
          <p>
            Office No 201, 10 Square Building Near Mount Carmel School,<br />
            Lulla Nagar, Pune – 411040
          </p>

          <div className="contact-details">
            <p>📞 +91 9922155556 / +91 9822146056</p>
            <p>✉️ suryainfrastructure21@gmail.com</p>
            <p>✉️ info@suryasecurityservices.co.in</p>
          </div>
        </div>

        {/* Map */}
        <div className="contact-map">
         <iframe
  title="Surya Security Services Office Location"
  src="https://www.google.com/maps?q=10%20Square,%20opposite%20Ishwar%20Petrol%20Pump,%20near%20Mount%20Carmel%20School,%20Lullanagar,%20Pune,%20Maharashtra%20411040&output=embed"
  loading="lazy"
></iframe>

        </div>
      </div>

    {/* Large Contact Form Card */}
<div className="contact-form-card">
  <h3>Get In Touch</h3>

  <form
    className="contact-form"
    onSubmit={(e) => {
      e.preventDefault();

      const form = e.target;
      const phonePattern = /^[0-9]{10}$/;

      if (!phonePattern.test(form.phone.value)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }

      if (form.message.value.trim().length < 10) {
        alert("Message must be at least 10 characters long.");
        return;
      }

      alert("Form submitted successfully!");
      form.reset();
    }}
  >
    <input
      type="text"
      name="name"
      placeholder="Enter Name"
      required
      minLength="3"
    />

    <input
      type="email"
      name="email"
      placeholder="Enter Email Id"
      required
    />

    <select name="service" required>
      <option value="">Select Service</option>
      <option>Private Security</option>
      <option>Corporate Security</option>
      <option>Event Security</option>
    </select>

    <input
      type="tel"
      name="phone"
      placeholder="Enter Phone No"
      pattern="[0-9]{10}"
      title="Enter a valid 10-digit phone number"
      required
    />

    <textarea
      name="message"
      placeholder="Message"
      rows="4"
      required
      minLength="10"
    ></textarea>

    <label className="consent">
      <input type="checkbox" name="consent" required />
      <span>
        I hereby authorize to send notifications on SMS / Messages / Promotional / Informational messages.
      </span>
    </label>

    <button type="submit">Submit</button>
  </form>
</div>
</section>

  );
};

export default Contact;
