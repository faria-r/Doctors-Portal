import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Myappointment = () => {
  const {user} = useContext(AuthContext);
  const url = `https://y-faria-r.vercel.app/bookings?email=${user?.email}`;

  const {data:bookings = []} = useQuery({
    queryKey:['bookings',user?.email],
    queryFn:async ()=>{
      const res = await fetch(url,{
        headers:{
          authorization:`bearer ${localStorage.getItem('Access-token')}`
        }
      });
      const data = await res.json();
      return data;
    }
  })
    return (
        <div>
          <h3 className='text-4xl font-bold mb-8'>My Appointment</h3>
           <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
    
{ bookings &&
  bookings.map((booking,i) =>  <tr
  key={booking._id}
  >
    <th>{i+1}</th>
    <td>{booking.patient}</td>
    <td>{booking.treatment}</td>
    <td>{booking.appointmentDate}</td>
    <td>{booking.slot}</td>
    <td>
{
  booking.price && !booking.paid  && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary btn-sm'>Pay</button></Link>
  
}
{
  booking?.price && booking.paid && <span className='text-green-500 font-bold font-xl'>Paid</span>
}
    </td>
  </tr>)
}
     
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myappointment;