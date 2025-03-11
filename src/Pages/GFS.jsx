import React from "react";
import "../componants/Style/CarPage.css";
import { Navigate, useNavigate } from "react-router-dom";
const GFS = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="car-page-wrapper">
        {/* Title Section */}
        <div className="title-section">
          <h1> 🏡 Welcome to KMB GFS Plot Service</h1>
          <p> GFS Builders – Your Dream Plot Awaits!</p>
        </div>
      </div>
      <div className="car-page-container">
        <div className="car-card">
          {/* Left Side - Car Image */}

          <div className="car-image-container">
            <img src="/departments/Car.jpg" alt="GFS" className="car-image" />
          </div>

          {/* Right Side - Car Details */}
          <div className="car-details">
            <h1 className="car-title">GFS builder</h1>
            <p className="car-description">
              Discover prime residential and commercial plots with GFS Builders.
              Offering secure and affordable investment opportunities in
              strategic locations, GFS Builders ensures a hassle-free buying
              process and future value growth. Start building your dream today!
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features:</h3>
              <ul>
                <li>Prime Locations</li>
                <li>Flexible Payment Plans</li>
                <li>Secure Investment:</li>
                <li>Modern Infrastructure:</li>
                <li>High ROI:</li>
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

export default GFS;
