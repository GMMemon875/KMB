import React from "react";
import "../componants/Style/CarPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const HostelRent = () => {
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
              src="/departments/Car.jpg"
              alt="Luxury Car"
              className="car-image"
            />
          </div>

          {/* Right Side - Car Details */}
          <div className="car-details">
            <h1 className="car-title">Hostel for Rent</h1>
            <p className="car-description">
              The comfort and luxury of our premium Hostel Room rental service.
              Book now and stay secure.
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features:</h3>
              <ul>
                <li>AC</li>
                <li>Automatic Light system</li>
                <li>24 hours Watar</li>
                <li>Wifi</li>
                <li>scurity</li>
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

export default HostelRent;
