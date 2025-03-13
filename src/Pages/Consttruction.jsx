import React from "react";
import "../componants/Style/CarPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const Consttruction = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="car-page-wrapper">
        {/* Title Section */}
        <div className="title-section">
          <h1>🏗️ Welcome to KMB contractor Service</h1>
          <p> KMB Construction – Building Dreams, Creating Futures</p>
        </div>
      </div>
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
            <h1 className="car-title">KMB contractor</h1>
            <p className="car-description">
              As a trusted contractor, we provide high-quality construction
              services for residential, commercial, and industrial projects. Our
              expert team handles everything from planning to execution,
              ensuring projects are completed on time and within budget.
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features:</h3>
              <ul>
                <li>Expert Team:</li>
                <li>High-Quality Materials </li>
                <li>On-Time Delivery: </li>
                <li>Modern Design</li>
                <li>Cost-Effective Solutions:</li>
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
