import React from "react";
import Hero from "../componants/Hero";
import Biography from "../componants/Biography";
import Department from "../componants/Department";
import MessageFrom from "../componants/MessageForm";

const Home = () => {
  return (
    <>
      <Hero
        title={"welcome to KMB International service provider Company"}
        imageUrl={"./4d.png"}
      />
      <Biography imageUrl={"about.png"} />
      <Department />
      <MessageFrom />
    </>
  );
};

export default Home;
