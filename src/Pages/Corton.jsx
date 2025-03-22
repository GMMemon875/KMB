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
          <h1> Welcome to KMBI Online Teaching Service</h1>
          <p> Online Tuition Services for International Students</p>
        </div>
      </div>
      <div className="car-page-container">
        <div className="car-card">
          {/* Left Side - Car Image */}

          <div className="car-image-container">
            <img src="/Depart/carton1.jpg" alt="GFS" className="car-image" />
          </div>

          {/* Right Side - Car Details */}
          <div className="car-details">
            <h1 className="car-title">Online Tuition Services</h1>
            <p className="car-description">
              We specialize in providing high-quality online tuition for
              international students, ensuring academic excellence through
              personalized learning. Our experienced tutors offer expert
              guidance across various subjects, including
              <br />
              We focus on interactive teaching methods, customized lesson plans,
              and flexible scheduling to accommodate different time zones and
              learning needs. Whether students require academic support, exam
              preparation, or concept-based learning, we are committed to
              delivering a seamless and effective online learning experience.
            </p>

            {/* Features */}
            <div className="car-features">
              <h3>Features:</h3>
              <ul>
                <li>Mathematics</li>
                <li>Science</li>
                <li>English</li>
                <li>Quran</li>
                <li>DIT CIT OAT</li>
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

export default Corton;
