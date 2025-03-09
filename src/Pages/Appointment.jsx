import React from "react";
import AppointmentForm from "../componants/AppointmentForm";
import Hero from "../componants/Hero";

const Appointment = () => {
  return (
    <>
      <Hero title={"Get Appointment For Service "} imageUrl={"./signin.png"} />

      <AppointmentForm />
    </>
  );
};

export default Appointment;
