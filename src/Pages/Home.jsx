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
        imageUrl={"./funder.jpg"}
        pera={
          " Kausar Marketing Bureau International (KMBI) we pride ourselves on offering a comprehensive range of services that reflect our commitment to quality, innovation, and customer satisfaction. Our diverse portfolio spans across multiple sectors, ensuring that we meet the evolving needs of our global clients with professionalism and expertise"
        }
      />
      <Biography imageUrl={"./sherazbhai.jpg"} />
      <Department />
      <MessageFrom />
    </>
  );
};

export default Home;
