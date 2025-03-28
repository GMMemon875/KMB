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
          <h1> 🚗 Welcome to KMBI Car Sales and Purchase Service</h1>
          <p>Find the best cars for Service at affordable prices!</p>
        </div>
      </div>
      <div className="car-page-container">
        <div className="car-card">
          {/* Left Side - Car Image */}

          <div className="car-image-container">
            <img src="/Depart/car.jpg" alt="Luxury Car" className="car-image" />
          </div>

          {/* Right Side - Car Details */}
          <div className="car-details">
            <h1 className="car-title">Luxury Car Rent</h1>
            <p className="car-description">
              Car Sales & Purchase – Buy & Sell New & Used Cars with Ease
              Looking for a reliable platform to buy or sell cars? Our Car Sales
              & Purchase service offers a seamless experience for both new and
              used car transactions. Whether you want to upgrade to a new model
              or sell your current vehicle at the best price, we ensure a
              hassle-free process with complete transparency and customer
              satisfaction.
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features</h3>
              <ul>
                <li>Variety of Cars – New & used options available.</li>
                <li>Secure Deals – Verified buyers & sellers.</li>
                <li>Fair Pricing – Instant car valuation.</li>
                <li>Hassle-Free Process – Easy paperwork & transactions</li>
                <li>Flexible Rental Plans</li>
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

export default CarPage;
