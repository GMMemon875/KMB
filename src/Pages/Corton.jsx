import React from "react";
import "../componants/Style/CarPage.css";
import { Navigate, useNavigate } from "react-router-dom";
const Corton = () => {
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
            <img src="/departments/Car.jpg" alt="GFS" className="car-image" />
          </div>

          {/* Right Side - Car Details */}
          <div className="car-details">
            <h1 className="car-title">GFS Corton Creation</h1>
            <p className="car-description">
              KMB is create a Animation Corton creation to your store and Corton
              Atomation on you Youtube channel
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features:</h3>
              <ul>
                <li>Gas</li>
                <li>Watar</li>
                <li>Road</li>
                <li>Clean Road</li>
                <li>Security system</li>
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
