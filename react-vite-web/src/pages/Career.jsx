import React, { useState } from "react";
import "./Career.css";

const Career = () => {

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
    details: null
  });


  // ✅ Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(form.phone.value)) {
      setPopup({
        show: true,
        type: "error",
        message: "Please enter a valid 10-digit phone number.",
        details: null
      });
      return;
    }

    if (form.file.files.length === 0) {
      setPopup({
        show: true,
        type: "error",
        message: "Please upload your resume.",
        details: null
      });
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name.value);
    formData.append("email", form.email.value);
    formData.append("phone", form.phone.value);
    formData.append("service", form.service.value);
    formData.append("jobPosition", form.position.value);
    formData.append("file", form.file.files[0]);

    try {

      setLoading(true); // ✅ Freeze screen

      const response = await fetch(
        "https://securitywebsite-5o90.onrender.com/api/submit-resume",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.text();

      setLoading(false);

      if (response.ok) {

        setPopup({
          show: true,
          type: "success",
          message: "Message sent successfully!",
          details: {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            service: form.service.value,
            position: form.position.value
          }
        });

        form.reset();

      } else {

        setPopup({
          show: true,
          type: "error",
          message: result,
          details: null
        });

      }

    } catch (error) {

      setLoading(false);

      setPopup({
        show: true,
        type: "error",
        message: "Backend not reachable. Please try again.",
        details: null
      });

    }
  };


  return (
    <>

      {/* ✅ Loading Overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-box">
            <div className="spinner"></div>
            <p>Sending message...</p>
          </div>
        </div>
      )}


      {/* ✅ Popup */}
      {popup.show && (
        <div className="popup-overlay">

          <div className="popup-box">

            <button
              className="popup-close"
              onClick={() => setPopup({ show: false })}
            >
              ×
            </button>

            <h3 className={popup.type === "success" ? "success" : "error"}>
              {popup.type === "success"
                ? "Message Sent Successfully"
                : "Error"}
            </h3>

            <p>{popup.message}</p>

            {popup.details && (
              <div className="popup-details">
                <p><b>Name:</b> {popup.details.name}</p>
                <p><b>Email:</b> {popup.details.email}</p>
                <p><b>Phone:</b> {popup.details.phone}</p>
                <p><b>Service:</b> {popup.details.service}</p>
                <p><b>Position:</b> {popup.details.position}</p>
              </div>
            )}

          </div>

        </div>
      )}



      {/* Career Hero Section */}
      <section className="career-hero">
        <img src="/careermain.jpeg" alt="Career Banner" />
        <div className="career-hero-overlay"></div>
      </section>


      {/* Job Section */}
      <section className="job-section">

        {/* Job 1 */}
        <div className="job-card">

          <div className="job-content">

            <div className="job-image-container">
              <img src="/about2.jpg" alt="Security Guard" />
            </div>

            <div className="job-text">

              <span className="job-label">JOB DESCRIPTION</span>

              <h2>Security Guard</h2>

              <p>
                A Security Guard plays a crucial role in maintaining the safety
                and security of a designated area.
              </p>

              <a href="#resume-form" className="apply-btn">
                APPLY NOW
              </a>

            </div>

          </div>

        </div>


        {/* Job 2 */}
        <div className="job-card">

          <div className="job-content">

            <div className="job-image-container">
              <img src="/about1.jpg" alt="Housekeeping" />
            </div>

            <div className="job-text">

              <span className="job-label">JOB DESCRIPTION</span>

              <h2>House Keeping Staff</h2>

              <p>
                Housekeeping Staff members help maintain cleanliness and hygiene.
              </p>

              <a href="#resume-form" className="apply-btn">
                APPLY NOW
              </a>

            </div>

          </div>

        </div>

      </section>



      {/* Resume Form */}
      <section className="career-form" id="resume-form">

        <h2>Submit Your Resume!</h2>

        <form className="resume-form" onSubmit={handleSubmit}>

          <div className="form-grid">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <select name="service" required>

              <option value="">Select Service</option>

              <option>Private Security Services</option>

              <option>House Keeping Services</option>

              <option>Human Resource Outsourcing Services</option>

            </select>


            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />


            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />


            <input
              type="text"
              name="position"
              placeholder="Job Position"
              required
            />


            <input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx"
              required
            />

          </div>


          <button type="submit" className="submit-btn">
            SUBMIT
          </button>


        </form>

      </section>

    </>
  );

};

export default Career;