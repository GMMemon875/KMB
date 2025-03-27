import React from "react";
import Hero from "../componants/Hero";
import Biography from "../componants/Biography";
import Department from "../componants/Department";
import MessageFrom from "../componants/MessageForm";

const Home = () => {
  return (
    <>
      <Hero
        title={`Welcome to  KMB International service provider Company`}
        imageUrl={"./sherazbhai.jpg"}
      />
      <Biography imageUrl={"./sherazbhai.jpg"} />
      <Department />
      <MessageFrom />
    </>
  );
};

export default Home;
