import React from 'react';

const AppoinmentOption = ({option,setTreatments}) => {
    const {name,slots} = option;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="text-2xl text-secondary  font-bold text-center">{name}</h2>
    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
    <p>
       {slots.length} {slots.length > 1 ? 'Spaces': 'Space'} Available

    </p>
    <div className="card-actions justify-center">
      <label htmlFor="booking-modal" 
      disabled={slots.length === 0}
      onClick = {()=> setTreatments(option)}className="btn btn-primary text-white">Book Appointment</label> 
    </div>
  </div>
</div>
        </div>
    );
};

export default AppoinmentOption;