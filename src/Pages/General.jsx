import React from "react";
import "../componants/Style/CarPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const General = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="car-page-wrapper">
        {/* Title Section */}
        <div className="title-section">
          <h1>🌟 Welcome to KMBI General Trading Service</h1>
          <p>We offer comprehensive general trading services</p>
        </div>
      </div>
      <div className="car-page-container">
        <div className="car-card">
          {/* Left Side - Car Image */}

          <div className="car-image-container">
            <img
              src="/Depart/garnal.jpg"
              alt="Luxury Car"
              className="car-image"
            />
          </div>

          {/* Right Side - Car Details */}
          <div className="car-details">
            <h1 className="car-title">General Trading</h1>
            <p className="car-description">
              We offer comprehensive general trading services, dealing in a wide
              variety of goods across different industries. Whether you're
              looking to buy or sell, we provide a trusted and efficient
              platform to facilitate trade at competitive prices. 🚀
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features</h3>
              <ul>
                <li> Global Sourcing & Procurement</li>
                <li> Import & Export Services</li>
                <li> Wholesale & Distribution</li>
                <li> Product Research & Market Analysis</li>
                <li> Quality Assurance & Inspection</li>
              </ul>
            </div>

            {/* Footer Section */}
            <div className="car-footer">
              {/* <span className="car-price">$45/day</span> */}
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

export default General;
