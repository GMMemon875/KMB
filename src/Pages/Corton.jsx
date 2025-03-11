import React from "react";
import "../componants/Style/CarPage.css";
import { Navigate, useNavigate } from "react-router-dom";
const Corton = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="car-page-wrapper">
        {/* Title Section */}
        <div className="title-section">
          <h1>🎬 Welcome to KMB Animation & Cartoon Service</h1>
          <p> Bring Your Ideas to Life with Animation & Cartoon Design</p>
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
            <h1 className="car-title">Corton Creation & Animation</h1>
            <p className="car-description">
              Transform your vision into captivating animations and engaging
              cartoons. Our creative team crafts vibrant, dynamic visuals that
              tell your story, capture attention, and leave a lasting impression
              on your audience.
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features:</h3>
              <ul>
                <li>Creative Storytelling</li>
                <li>High-Quality Graphics</li>
                <li>Custom Characters:</li>
                <li>2D & 3D Animation</li>
                <li>Motion Effects:</li>
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

export default Corton;
