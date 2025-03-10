import React from "react";
import "../componants/Style/CarPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const Consttruction = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="title">
            <h2>WelCome to KMB international Car Renting Service</h2>
          </div> */}
      <div className="car-page-container">
        <div className="car-card">
          {/* Left Side - Car Image */}

          <div className="car-image-container">
            <img
              src="/departments/contruction.jpg"
              alt="Luxury Car"
              className="car-image"
            />
          </div>

          {/* Right Side - Car Details */}
          <div className="car-details">
            <h1 className="car-title">KMB Construction</h1>
            <p className="car-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem
              commodi, explicabo illum dolorem perferendis totam, earum,
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features:</h3>
              <ul>
                <li>Promot your youtube channal</li>
                <li>Promotion your Pruduct </li>
                <li>24 hours Open</li>
                <li>10 Add On one Break Time</li>
                <li>scurity of Your Product</li>
              </ul>
            </div>

            {/* Footer Section */}
            <div className="car-footer">
              <span className="car-price">$45/day</span>
              <button
                className="book-now-btn"
                onClick={() => navigate(`/Appointment`)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consttruction;
