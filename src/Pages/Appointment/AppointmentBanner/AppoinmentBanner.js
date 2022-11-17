import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import bg from '../../../assets/images/bg.png'

const AppoinmentBanner = ({selectedDate,setSelectedDate}) => {

  return (
    <header 
    style={{
        background:`url(${bg})`,
        backgroundSize:'cover'
    }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="dentist chair"
            className="lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div className="mr-16">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
          
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
