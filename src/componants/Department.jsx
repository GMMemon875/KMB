import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../componants/Style/Department.css";
import { useNavigate } from "react-router-dom";

const Departments = () => {
  const navigate = useNavigate();

  const departmentsArray = [
    {
      name: "UI/UX Design",
      imageUrl: "/departments/",
      path: "/ui-ux-design",
    },
    {
      name: "WEB DEVELOPMENT",
      imageUrl: "/departments/",
      path: "/web-development",
    },
    {
      name: "CARTON ANIMATION",
      imageUrl: "/departments/",
      path: "/cartoon-animation",
    },
    {
      name: "IMPORTER EXPORTER",
      imageUrl: "/departments/",
      path: "/export",
    },
    {
      name: "GENERAL TRADING",
      imageUrl: "/departments/",
      path: "/general",
    },
    {
      name: "SALES AND MARKETING",
      imageUrl: "/departments/",
      path: "/gfs-building ",
    },
    {
      name: "Contractor",
      imageUrl: "/departments/contruction.jpg",
      path: "/construction",
    },

    {
      name: "BOYS HOSTEL",
      imageUrl: "/departments/ ",
      path: "/hostel-rent",
    },

    {
      name: "CBM 24/7 NEWS",
      imageUrl: "/departments/",
      path: "/news-channel",
    },
    {
      name: "CAR RENT",
      imageUrl: "/departments/Car.jpg",
      path: "/car-rent",
    },
  ];

  const responsive = {
    extraLarge: { breakpoint: { max: 3000, min: 1324 }, items: 4 },
    large: { breakpoint: { max: 1324, min: 1005 }, items: 3 },
    medium: { breakpoint: { max: 1005, min: 700 }, items: 2 },
    small: { breakpoint: { max: 700, min: 0 }, items: 1 },
  };

  return (
    <div className="container departments">
      <h2>Services</h2>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {departmentsArray.map((depart, index) => (
          <div
            key={index}
            className="card"
            onClick={() => navigate(depart.path)} // 👈 Yahan navigate ka sahi use
            style={{ cursor: "pointer" }} // 👈 Cursor pointer add kar ke clickable bana rahe hain
          >
            <div className="depart-name">{depart.name}</div>
            <img src={depart.imageUrl} alt={depart.name} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Departments;
