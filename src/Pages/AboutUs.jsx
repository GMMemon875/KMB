import React from "react";
import Hero from "../componants/Hero";
import Biography from "../componants/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"KMBI Service Provider Somethink about Me"}
        imageUrl={"./funder.jpg"}
        pera={
          "KMB.International (kausar marketing bureau international) is a customer-focused organization committed to excellence innovation and integrity We provide top-quality products and services across multiple industries ensuring tailored solutions for our clients. With a strong focus on trust and reliability our professional team delivers high-standard sales services and consultancy. Driven by a global vision and customer-centric approach we continuously innovate to make a lasting impact in the market."
        }
      />
      <Biography imageUrl={"/sherazbhai.jpg"} />
    </>
  );
};

export default AboutUs;
