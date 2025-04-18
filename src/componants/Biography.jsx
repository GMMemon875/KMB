import React from "react";
import "../componants/Style/Biography.css";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h7>Biography</h7>
          <h3>Kausar Marketing Bureau International </h3>
          <p>
            KMBI Established in 1976 by the visionary entrepreneur Alhaj Gulzar
            Ahmed Kausar, Kausar Marketing Bureau International (KMBI) has
            evolved from its humble beginnings into a diversified, multi-service
            enterprise with an international footprint. Starting as an importer
            and general trading company, KMBI has built a legacy of excellence,
            integrity, and innovation across various industries.
          </p>

          <p>
            KMBI initially specialized in the import and trading of goods across
            the Gulf region, including Saudi Arabia, Dubai, Bahrain, and Qatar.
            The company’s primary trading portfolio included: Fresh Fruits
            Livestock Vegetables Sports Items Medical Equipment Starting as a
            trading company, it expanded into FAS Multiservices, Contracting
            Services, IT & education, and media. Under CEO R. Sheraz Kausar,
            KMBI now offers infrastructure solutions, digital services, online
            education, and operates CBN 24-7 International and Ufaq News. With a
            commitment to innovation and excellence, KMBI continues to expand
            its global footprint
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
