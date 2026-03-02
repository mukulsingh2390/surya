import React from "react";
import "./Career.css";

const Career = () => {
  // ✅ Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(form.phone.value)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // File validation
    if (form.file.files.length === 0) {
      alert("Please upload your resume.");
      return;
    }

    // Prepare FormData
    const formData = new FormData();
    formData.append("name", form.name.value);
    formData.append("email", form.email.value);
    formData.append("phone", form.phone.value);
    formData.append("service", form.service.value);
    formData.append("jobPosition", form.position.value);
    formData.append("file", form.file.files[0]);

    try {
      const response = await fetch(
        "https://securitywebsite-5o90.onrender.com/api/submit-resume", // Render backend
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.text();

      if (response.ok) {
        alert("Form submitted successfully: " + result);
        form.reset();
      } else {
        alert("Error submitting form: " + result);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Backend not reachable! Check your Render deployment.");
    }
  };

  return (
    <>
      {/* Career Hero Section */}
      <section className="career-hero">
        <img src="/careermain.jpeg" alt="Career Banner" />
        <div className="career-hero-overlay"></div>
      </section>

      {/* Job Description Section */}
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
                and security of a designated area, property, or individuals.
              </p>

              <h4>Key Responsibilities:</h4>
              <ul>
                <li>Conduct regular patrols and monitor surveillance systems</li>
                <li>Control access and verify visitor identity</li>
                <li>Respond quickly to emergencies and incidents</li>
                <li>Maintain incident and visitor records</li>
              </ul>

              <h4>Requirements:</h4>
              <ul>
                <li>High school diploma or equivalent</li>
                <li>Experience in security services preferred</li>
                <li>Good communication and observation skills</li>
                <li>Physically fit and alert</li>
              </ul>

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
                Housekeeping Staff members help maintain cleanliness and hygiene
                in offices, hotels, hospitals, and residential facilities.
              </p>

              <h4>Key Responsibilities:</h4>
              <ul>
                <li>Cleaning, mopping, dusting, and sanitizing areas</li>
                <li>Preparing rooms and replenishing supplies</li>
                <li>Waste collection and disposal</li>
                <li>Maintaining hygiene standards</li>
              </ul>

              <h4>Requirements:</h4>
              <ul>
                <li>Previous housekeeping experience preferred</li>
                <li>Knowledge of cleaning tools and materials</li>
                <li>Physically fit and detail-oriented</li>
                <li>Flexible working hours</li>
              </ul>

              <a href="#resume-form" className="apply-btn">
                APPLY NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Submission Form */}
      <section className="career-form" id="resume-form">
        <h2>Submit Your Resume!</h2>

        <form className="resume-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <input type="text" name="name" placeholder="Your Name" required />

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