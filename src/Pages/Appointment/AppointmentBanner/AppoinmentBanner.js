import React, { useState } from "react";
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import {format}  from 'date-fns';

const AppoinmentBanner = () => {
    const [selectedDate,setSelectedDate] = useState(new Date())
  return (
    <header>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair} alt='dentist chair'
            className=" rounded-lg shadow-2xl"
          />
          <div>
           <DayPicker
           mode='single'
           selected={selectedDate}
           onSelect={setSelectedDate}
           ></DayPicker>
           <p>Your selected Date is: {format(selectedDate,'PP')}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
