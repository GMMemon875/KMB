import React from "react";
import Hero from "../componants/Hero";
import Biography from "../componants/Biography";
import Department from "../componants/Department";
import MessageFrom from "../componants/MessageForm";

const Home = () => {
  return (
    <>
      <Hero
        title={"well come to KMB.ai | service provider Company"}
        imageUrl={"./fling.png"}
      />
      <Biography imageUrl={"about.png"} />
      <Department />
      <MessageFrom />
    </>
  );
};

export default Home;
