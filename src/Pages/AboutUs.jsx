import React from "react";
import Hero from "../componants/Hero";
import Biography from "../componants/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"KMB Service Provider | SomeThink about Me"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
