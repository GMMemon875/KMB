import React from "react";
import "../componants/Style/CarPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const WebDev = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="car-page-wrapper">
        {/* Title Section */}
        <div className="title-section">
          <h1>🌟 Welcome to KMB Web Development Service</h1>
          <p>Find the best Web service at affordable prices!</p>
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
            <h1 className="car-title">Web development</h1>
            <p className="car-description">
              Empowering your business with cutting-edge web solutions! At KMB
              Web Development, we specialize in creating fast, responsive, and
              visually stunning websites tailored to your unique needs. Whether
              it's a sleek business site, an e-commerce platform, or a custom
              web app — we've got you covered. Let us turn your ideas into
              reality with expert coding and creative design. 🚀
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features:</h3>
              <ul>
                <li> Responsive Design</li>
                <li>Fast Performance</li>
                <li>Custom Solutions:</li>
                <li> SEO Friendly:</li>
                <li> Secure & Scalable: </li>
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

export default WebDev;
