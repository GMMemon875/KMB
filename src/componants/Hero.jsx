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
          <div className="boxContanier">
            <div className="box">
              <img src="/4d.png" alt="" />
            </div>
            <div className="box">
              <img src="/4d.png" alt="" />
            </div>
            <div className="box">
              <img src="/4d.png" alt="" />
            </div>
            <div className="box">
              <img src="/4d.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="banner">
            <img src={imageUrl} alt="hero" className="animated-image" />
            <span>
              <img src="/Vector.png" alt="vector" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
