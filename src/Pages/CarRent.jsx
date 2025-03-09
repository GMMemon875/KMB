import React from "react";
import "../componants/Style/CarPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const CarPage = () => {
  const navigate = useNavigate();
  return (
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
            Experience the comfort and luxury of our premium car rental service.
            Book now and travel in style.
          </p>

          {/* Features */}
          <div className="car-features">
            <h3>Features:</h3>
            <ul>
              <li>AC</li>
              <li>Automatic</li>
              <li>GPS</li>
              <li>Bluetooth Audio</li>
              <li>5 Seater</li>
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
  );
};

export default CarPage;
