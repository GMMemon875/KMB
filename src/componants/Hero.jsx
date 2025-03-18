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
            and expertise. <br></br>
            <br></br>
            <h4>
              1. Import & Export and General Trading Services <br></br>
            </h4>
            <h4>
              2. Contractor<br></br>
            </h4>
            <h4>
              3. KMBI Contracting Services <br></br>
            </h4>
            <h4>
              4. Software Development Services <br></br>
            </h4>
            <h4>
              5. Educational Services (Online Learning) <br></br>
            </h4>
            <h4>
              6. Real Estate and Marketing Services <br></br>
            </h4>
            <br></br>
            <h3>
              Commitment <br></br>
            </h3>
            Kausar Marketing Bureau International is committed to delivering
            services that meet the highest standards of quality and
            professionalism. With continuous innovation and a customer-centric
            approach, we strive to expand our impact across multiple industries
            while upholding our core values of trust, excellence, and integrity.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          {/* <span>
            <img src="/about.png" alt="vector" />
          </span> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
