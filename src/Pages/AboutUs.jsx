import React from "react";
import Hero from "../componants/Hero";
import Biography from "../componants/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero title={"KMBI Service Provider Somethink about Me"} imageUrl={""} />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
