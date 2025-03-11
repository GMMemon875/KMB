import React from "react";
import "../componants/Style/CarPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const UiUx = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="car-page-wrapper">
        {/* Title Section */}
        <div className="title-section">
          <h1>✨ Welcome to KMB UI/UX Design Service</h1>
          <p> Elevate Your Brand with Professional UI/UX Design</p>
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
            <h1 className="car-title">KMB UI/UX design </h1>
            <p className="car-description">
              Unlock the power of user experience with our cutting-edge UI/UX
              design services. We create intuitive, visually appealing
              interfaces that enhance user engagement and drive business growth.
              Let us transform your ideas into seamless digital experiences!
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features:</h3>
              <ul>
                <li> User-Centric Design:</li>
                <li> Modern Aesthetics:</li>
                <li> Interactive Prototypes: </li>
                <li> Consistent Branding</li>
                <li> Accessibility Focus:</li>
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

export default UiUx;
