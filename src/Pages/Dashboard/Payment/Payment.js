import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking  = useLoaderData();
    console.log(booking,'Booking Data')
    return (
        <div>
            <h3 className='text-3xl'>Payment for {booking.treatement}</h3>
            <p>Please Pay ${booking.price} for Your Appointment on {booking.appointmentDate} at {booking.slot}</p>
        </div>
    );
};

export default Payment;