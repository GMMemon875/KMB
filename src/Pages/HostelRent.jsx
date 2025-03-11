import React from "react";
import "../componants/Style/CarPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const HostelRent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="car-page-wrapper">
        {/* Title Section */}
        <div className="title-section">
          <h1> 🏨 Welcome to KMB Hostel & Guest House Service</h1>
          <p>Comfort and Convenience at Affordable Rates</p>
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
            <h1 className="car-title">Hostel for Rent</h1>
            <p className="car-description">
              Experience a cozy stay at our Hostel & Guest House. Whether you're
              traveling for business or leisure, we provide a clean, secure, and
              welcoming environment with modern amenities to make your stay
              comfortable and enjoyable
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features:</h3>
              <ul>
                <li>Affordable Accommodation</li>
                <li>Modern Amenities:</li>
                <li>Prime Location</li>
                <li>24/7 Security</li>
                <li>Friendly Staff:</li>
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
