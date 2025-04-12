import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./componants/NaveBar";
import Appointment from "./Pages/Appointment";
import Footer from "./componants/Footer";
import { useContext } from "react";
import { Context } from "./main";
import { useEffect } from "react";
import axios from "axios";
import Departments from "./componants/Department";
import CarRent from "./Pages/CarRent";
import GFS from "./Pages/GFS";
import HostelRent from "./Pages/HostelRent";
import NewsChannal from "./Pages/NewsChannal";
import WebDev from "./Pages/WebDev";
import UiUx from "./Pages/UiUx";
import Consttruction from "./Pages/Consttruction";
import Corton from "./Pages/Corton";
import Export from "./Pages/Export";
import General from "./Pages/General";

const App = () => {
  // console.log(${import.meta.env.VITE_API_KEY});
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_KEY}/api/v1/user/patient/me`,
          {
            withCredentials: true,
          }
        );

        // console.log(response);
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Service" element={<Departments />} />
          <Route path="/car-rent" element={<CarRent />} />
          <Route path="/gfs-building" element={<GFS />} />
          <Route path="/hostel-rent" element={<HostelRent />} />
          <Route path="/news-channel" element={<NewsChannal />} />
          <Route path="/web-development" element={<WebDev />} />
          <Route path="/ui-ux-design" element={<UiUx />} />
          <Route path="/construction" element={<Consttruction />} />
          <Route path="/teaching" element={<Corton />} />
          <Route path="/export" element={<Export />} />
          <Route path="/general" element={<General />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
        <ToastContainer position="bottom-center" />
      </Router>
    </>
  );
};

export default App;
