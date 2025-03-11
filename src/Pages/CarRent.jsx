import React from "react";
import "../componants/Style/CarPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const CarPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="car-page-wrapper">
        {/* Title Section */}
        <div className="title-section">
          <h1> 🚗 Welcome to KMB Car Renting Service</h1>
          <p>Find the best cars for rent at affordable prices!</p>
        </div>
      </div>
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
            <h1 className="car-title">Luxury Car Rent</h1>
            <p className="car-description">
              Discover the convenience of affordable and reliable car rentals
              with KMB. Choose from a wide range of vehicles tailored to your
              needs, whether it's a business trip or a weekend getaway. Drive
              with confidence and comfort!
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features:</h3>
              <ul>
                <li>Wide Vehicle Selection</li>
                <li>Affordable Rates</li>
                <li>24/7 Customer Support</li>
                <li>Easy Booking Process</li>
                <li>Flexible Rental Plans</li>
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

export default CarPage;
