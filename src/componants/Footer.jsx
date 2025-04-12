import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "../componants/Style/Footer.css";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logooo.jpg" alt="logo" className="logo-img" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
            <div>
              <span className="facebook-icon">
                <a
                  href="https://www.facebook.com/share/153B1RNaSC/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </span>
              <span className="facebook-icon">
                <Link
                  to="https://www.instagram.com/kmbinternational2224?igsh=d25rY2dxZzF5YjEz"
                  target="blank"
                >
                  <i className="text-white fa-brands fa-instagram"></i>
                </Link>
              </span>
              <span className="facebook-icon">
                <a
                  href="https://www.olx.com.pk/item/pakinn-hostel-for-student-govt-or-bank-employes-visit-4pm-to-8pm-iid-1080605838"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/OLX_New_Logo.png"
                    alt="OLX"
                    style={{ width: "18px", height: "15px" }}
                  />
                </a>
              </span>
            </div>
          </div>

          <div>
            <div className="Hours">
              <div>Days</div>
              <div>Hours</div>
            </div>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact">
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>+923 238798054</span>
            </div>
            <div>
              <MdEmail />
              <span>Kmb.international.fas@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
