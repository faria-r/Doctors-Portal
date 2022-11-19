import React, { useState } from "react";
import { format } from "date-fns";
import AppoinmentOption from "./AppoinmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointments = ({ selectedDate }) => {
  
  const [treatments, setTreatments] = useState(null);
const date = format(selectedDate,'PP');
  const {data:appointmentOptions = [],refetch,isLoading} = useQuery({
    queryKey:['appointmentOptions',date],
    queryFn:()=>fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
    .then(res => res.json())
  })
if(isLoading){
return <Loading></Loading>
}
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
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
