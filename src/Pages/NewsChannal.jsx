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
            <h1 className="car-title">CBN News Channal</h1>
            <p className="car-description">
              At Our Media House, we amplify your brand through content
              creation, media strategy, social media management, brand
              promotion, and audience analytics.
            </p>

            <div className="car-features">
              <h3>Features</h3>
              <ul>
                <li>CBN 24-7 – A 24/7 news channel</li>
                <li>Ufaq News Network – A digital news platform</li>
                <li>
                  Roznama Nida-e-Karachi – Focused on Karachi’s local news &
                  culture
                </li>
                <li>Roznama Syasi Ufaq – In-depth political analysis</li>
                <li>
                  {" "}
                  We ensure a strong media presence across diverse platforms.
                </li>
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
