import { useState, useEffect } from "react";
import "./Hero.css";

// Import images
import heroBg1 from "../assets/sec back2.png";
import heroBg2 from "../assets/hero-bgt.jpeg";
import heroBg3 from "../assets/backgt.jpeg";
import heroBg4 from "../assets/suryas.jpeg";

const images = [heroBg1, heroBg2, heroBg3, heroBg4];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Slide Buttons */}
      <button className="slide-btn left" onClick={prevSlide}>
        ❮
      </button>

      <button className="slide-btn right" onClick={nextSlide}>
        ❯
      </button>

      {/* CENTER TEXT (ONLY FOR FIRST 3 IMAGES) */}
      {currentImage !== 3 && (
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
      )}

      {/* LEFT SIDE TEXT (ONLY FOR 4TH IMAGE) */}
      {currentImage === 3 && (
        <div className="hero-overlay hero-left-layout">
          <h2>
            Man Behind <br /> Surya Security Services
          </h2>

          <p className="hero-text">
            Mr. Ranjitsinh Patil, Managing Director
          </p>

          <div className="hero-buttons">
            <a href="/about" className="btn-primary">
              Know More
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;