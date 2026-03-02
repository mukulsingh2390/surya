import React from "react";
import "./WhatsappButton.css";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/919922155556?text=Hello%20Surya%20Security,%20I%20want%20to%20know%20about%20your%20services."
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsappButton;