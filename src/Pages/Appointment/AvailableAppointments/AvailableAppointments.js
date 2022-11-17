import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppoinmentOption from "./AppoinmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatments, setTreatments] = useState(null);
  useEffect(() => {
    fetch("AppoinmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className="my-16">
      <p className="text-center font-bold text-secondary">
        Available Appoinmetns :{format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppoinmentOption
            key={option._id}
            option={option}
            setTreatments={setTreatments}
          ></AppoinmentOption>
        ))}
      </div>
      {treatments && (
        <BookingModal
          treatments={treatments}
          selectedDate={selectedDate}
          setTreatments={setTreatments}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
