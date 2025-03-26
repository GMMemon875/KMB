import React from "react";
import "../componants/Style/Hero.css";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Kausar Marketing Bureau International (KMBI), we pride ourselves on
            offering a comprehensive range of services that reflect our
            commitment to quality, innovation, and customer satisfaction. Our
            diverse portfolio spans across multiple sectors, ensuring that we
            meet the evolving needs of our global clientele with professionalism
            and expertise.
          </p>
        </div>
        <div>
          <div className="banner">
            <img src={imageUrl} alt="hero" className="animated-image" />
            {/* <span>
              <img src="/Vector.png" alt="vector" />
            </span> */}
          </div>
        </div>
      </div>

      <div class="boxContainer">
        <div class="box">
          <img src="/Depart/ui.jpg" alt="Image 1" />
        </div>
        <div class="box">
          <img src="/Depart/web.jpg" alt="Image 2" />
        </div>
        <div class="box">
          <img src="/Depart/tranding1.jpg" alt="Image 3" />
        </div>
        <div class="box">
          <img src="/Depart/Social.jpg" alt="Image 4" />
        </div>
        <div class="box">
          <img src="/Depart/inport2.jpg" alt="Image 5" />
        </div>
        <div class="box">
          <img src="/Depart/carton1.jpg" alt="Image 6" />
        </div>
      </div>
    </>
  );
};

export default Hero;
