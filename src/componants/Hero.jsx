import React from "react";
import "../componants/Style/Hero.css";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus at ipsam et optio alias repellendus molestiae labore
            ea vero blanditiis quo nobis magni doloribus veritatis, inventore
            eveniet quas fugit beatae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus at ipsam et optio alias repellendus
            doloribus veritatis, inventore eveniet quas fugit beatae.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          {/* <span>
            <img src="/Vector.png" alt="vector" />
          </span> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
