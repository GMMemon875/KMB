import React from "react";
import "../componants/Style/CarPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const NewsChannal = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="car-page-wrapper">
        {/* Title Section */}
        <div className="title-section">
          <h1> 📺 Welcome to KMBI Media House Service</h1>
          <p>Elevate Your Brand with Powerful Media Solutions</p>
        </div>
      </div>
      <div className="car-page-container">
        <div className="car-card">
          {/* Left Side - Car Image */}

          <div className="car-image-container">
            <img
              src="/Depart/CBN1.jpg"
              alt="Luxury Car"
              className="car-image"
            />
          </div>

          {/* Right Side - Car Details */}
          <div className="car-details">
            <h1 className="car-title">KMBI News Channal</h1>
            <p className="car-description">
              Our Media House offers a full suite of services to amplify your
              brand’s voice and reach. From content creation to media strategy,
              we craft engaging experiences that connect with your audience and
              drive results.
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features:</h3>
              <ul>
                <li>Content Creation</li>
                <li>Media Strategy: </li>
                <li>Social Media Management</li>
                <li>Brand Promotion:</li>
                <li>Audience Analytics:</li>
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

export default NewsChannal;
