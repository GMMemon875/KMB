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
      imageUrl: "/departments/Car.jpg",
      path: "/ui-ux-design",
    },
    {
      name: "WEB DEVELOPMENT",
      imageUrl: "/departments/ortho.jpg",
      path: "/web-development",
    },
    {
      name: "CORTON ANIMATION",
      imageUrl: "/departments/ent.jpg",
      path: "/cartoon-animation",
    },
    {
      name: "IMPORTER EXPORTER",
      imageUrl: "/departments/cardio.jpg",
      path: "",
    },
    {
      name: "GENERAL TRADING",
      imageUrl: "/departments/neuro.jpg",
      path: "",
    },
    {
      name: "SALES AND MARKETING",
      imageUrl: "/departments/onco.jpg",
      path: "/gfs-building ",
    },
    {
      name: "CONSTRACTOR",
      imageUrl: "/departments/radio.jpg",
      path: "/construction",
    },

    {
      name: "BOYS HOSTEL",
      imageUrl: "/departments/contruction.jpg",
      path: "/hostel-rent",
    },
    {
      name: "DISPOSABLE CENTER",
      imageUrl: "/departments/ent.jpg",
      path: "",
    },
    {
      name: "WOOD WORK",
      imageUrl: "/departments/ent.jpg",
      path: "",
    },
    {
      name: "PRIVATE INVESTIGATION",
      imageUrl: "/departments/ent.jpg",
      path: "",
    },
    {
      name: "MEDIA HOUSE",
      imageUrl: "/departments/ent.jpg",
      path: "/news-channel",
    },
    {
      name: "CAR RENT",
      imageUrl: "/departments/ent.jpg",
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
