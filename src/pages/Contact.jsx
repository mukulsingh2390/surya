import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {

  const [loading, setLoading] = useState(false);

  // 🔒 Properly freeze full page when loading
  useEffect(() => {
    if (loading) {
      document.body.classList.add("freeze-scroll");
    } else {
      document.body.classList.remove("freeze-scroll");
    }

    return () => {
      document.body.classList.remove("freeze-scroll");
    };
  }, [loading]);

  // Popup state
  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
    data: null
  });

  const closePopup = () => {
    setPopup({
      show: false,
      type: "",
      message: "",
      data: null
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    const form = e.target;

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(form.phone.value)) {
      setPopup({
        show: true,
        type: "error",
        message: "Please enter a valid 10-digit phone number."
      });
      return;
    }

    if (form.message.value.trim().length < 10) {
      setPopup({
        show: true,
        type: "error",
        message: "Message must be at least 10 characters long."
      });
      return;
    }

    const formData = {
      name: form.name.value,
      email: form.email.value,
      service: form.service.value,
      phone: form.phone.value,
      message: form.message.value,
      consent: form.consent.checked,
    };

    try {

      setLoading(true);

      const response = await fetch(
        "https://securitywebsite-5o90.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      let result;

      try {
        result = await response.json();
      } catch {
        const text = await response.text();
        result = { message: text };
      }

      if (response.ok) {
        setPopup({
          show: true,
          type: "success",
          message: result.message || "Message sent successfully!",
          data: formData
        });
        form.reset();
      } else {
        setPopup({
          show: true,
          type: "error",
          message: result.message || "Failed to send message."
        });
      }

    } catch (error) {
      setPopup({
        show: true,
        type: "error",
        message: "Server error. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };

  return (

    <section className="contact">

      {/* 🔥 LOADING OVERLAY (FREEZE SCREEN) */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-box">
            <div className="spinner"></div>
            <p>Sending Message...</p>
          </div>
        </div>
      )}

 {/* Popup Modal */}
{popup.show && (
  <div className="popup-overlay">
    <div className="popup-box">

      {/* Close Button (Top Right) */}
      <button className="popup-close" onClick={closePopup}>
        ×
      </button>

      {/* Title */}
      <h2 className="popup-title">
        {popup.type === "success" ? "Success!" : "Error!"}
      </h2>

      {/* Message */}
      <p className="popup-message">{popup.message}</p>

      {/* Button */}
      <button
        className={`popup-btn ${
          popup.type === "success" ? "success" : "error"
        }`}
        onClick={closePopup}
      >
        {popup.type === "success" ? "CONTINUE" : "TRY AGAIN"}
      </button>

    </div>
  </div>
)}
      <span className="contact-subtitle">CONTACT US</span>
      <h2 className="contact-title">How can we help</h2>

      <div className="contact-top">

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

        <div className="contact-map">
          <iframe
            title="Surya Security Services Office Location"
            src="https://www.google.com/maps?q=10%20Square,%20opposite%20Ishwar%20Petrol%20Pump,%20near%20Mount%20Carmel%20School,%20Lullanagar,%20Pune,%20Maharashtra%20411040&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </div>

      <div className="contact-form-card">

        <h3>Get In Touch</h3>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input name="name" placeholder="Enter Name" required />
          <input name="email" type="email" placeholder="Enter Email Id" required />

          <select name="service" required>
            <option value="">Select Service</option>
            <option>Private Security</option>
            <option>Corporate Security</option>
            <option>Event Security</option>
          </select>

          <input name="phone" placeholder="Enter Phone No" required />
          <textarea name="message" placeholder="Message" required />

          <label className="consent">
            <input type="checkbox" name="consent" required />
            <span>
              I hereby authorize to send notifications on SMS / Messages / Promotional / Informational messages.
            </span>
          </label>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;