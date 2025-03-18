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
          <h4>Biography</h4>
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
            Livestock Vegetables Sports Items Medical Equipment Over time, KMBI
            expanded its expertise into general trading, dealing in electrical
            components and various general commodities, establishing a strong
            reputation for reliability and quality.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
