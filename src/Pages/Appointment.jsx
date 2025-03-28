import React from "react";
import AppointmentForm from "../componants/AppointmentForm";
import Hero from "../componants/Hero";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Get Appointment For Service "}
        imageUrl={"./sherazbhai.jpg"}
        pera={
          "We value your time and convenience. Our easy-to-use appointment booking system allows you to schedule your visit in just a few simple steps. Whether you're booking for a consultation, service, or meeting, we've got you covered. How It Works: 1. Select your preferred date and time. Fill out the required details.Confirm your appointment.       Once your appointment is booked, you’ll receive a confirmation along with any necessary details. Need to reschedule? No problem! You can easily modify or cancel your appointment as needed.Book now and enjoy a seamless experience!"
        }
      />

      <AppointmentForm />
    </>
  );
};

export default Appointment;
