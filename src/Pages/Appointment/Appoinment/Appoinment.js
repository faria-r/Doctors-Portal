import React, { useState } from 'react';
import AppoinmentBanner from '../AppointmentBanner/AppoinmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
           <AppoinmentBanner
           selectedDate={selectedDate}
           setSelectedDate={setSelectedDate}
           ></AppoinmentBanner>
           <AvailableAppointments
           selectedDate={selectedDate}
           setSelectedDate={setSelectedDate}
           ></AvailableAppointments>
        </div>
    );
};

export default Appoinment;