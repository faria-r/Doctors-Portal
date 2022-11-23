import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";

const BookingModal = ({ treatments, selectedDate,setTreatments,refetch }) => {
  const { name: treatmentName, slots ,price} = treatments; //treatment is just name of appointment options.

  const {user} = useContext(AuthContext)
  const date = format(selectedDate, "PP");

  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;

    const booking = {
appointmentDate:date,
treatment:treatmentName,
patient:name,
slot,
email,
phone,
price
    }
    //todo: send data to the server and once the data is saved then close the modal and then set a toast
    console.log(booking);
    fetch('https://y-faria-r.vercel.app/bookings',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        setTreatments(null);
        toast.success('Booking Confirmed');
        refetch();
      }
      else{
        toast.error(data.message)
      }
      
    })
  

  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-6">
            <input
              type="text"
              value={date}
              disabled
              className="input w-full input-bordered"
            />
            <select name='slot' className="select select-bordered w-full ">
             {
                slots.map((slot,i) => <option key={i} value={slot}>{slot}</option>)
             }
            </select>
            <input
              type="text"
              placeholder="Your Name"
              name='name'
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full "
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              defaultValue={user?.email}
              required 
              readOnly
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              className="input input-bordered w-full "
            />
            <input
              className="btn btn-accent w-full max-w-xs"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
