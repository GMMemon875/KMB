import React from "react";
import "../componants/Style/Hero.css";
import { FaWhatsapp } from "react-icons/fa";

const Hero = ({ title, imageUrl, pera }) => {
  const phoneNumber = "923 11 2221231";
  const message = encodeURIComponent("Hi , Can i get more info on this?.");
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>{pera}</p>
        </div>
        <div>
          <div className="banner">
            <img src={imageUrl} alt="hero" className="animated-image" />
            {/* <span>
              <img src="/Vector.png" alt="vector" />
            </span> */}
          </div>
        </div>
        <a
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </div>

      <div class="boxContainer">
        <div class="box">
          <img src="/Depart/ui.jpg" alt="Image 1" />
        </div>
        <div class="box">
          <img src="/Depart/web.jpg" alt="Image 2" />
        </div>
        <div class="box">
          <img src="/contractor.jpg" alt="Image 3" />
        </div>
        <div class="box">
          <img src="/Depart/Social.jpg" alt="Image 4" />
        </div>
        <div class="box">
          <img src="/online.jpg" alt="Image 5" />
        </div>
        <div class="box">
          <img src="/Depart/hostel1.jpg" alt="Image 6" />
        </div>
      </div>
    </>
  );
};

export default Hero;
