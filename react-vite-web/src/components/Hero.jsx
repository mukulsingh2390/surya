import { useState, useEffect } from "react";
import "./Hero.css";

// Import images from assets
import heroBg1 from "../assets/sec back2.png";
import heroBg2 from "../assets/hero-bgt.jpeg";
import heroBg3 from "../assets/backgt.jpeg";
import heroBg4 from "../assets/suryas.jpeg"; // ✅ fixed name

const images = [heroBg1, heroBg2, heroBg3, heroBg4];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <div className="hero-overlay">
        <p className="hero-subtitle">Surya Security Services</p>

        <h1>
          Best Security Service <br /> Providers
        </h1>

        <p className="hero-text">
          Trusted protection solutions for residential, commercial, and
          industrial security needs.
        </p>

        <div className="hero-buttons">
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>

          <a href="/services" className="btn-outline">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
