import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
    const navigation = useNavigation()
  const booking = useLoaderData();
  console.log(booking, "Booking Data");
  if(navigation.state === 'loading'){
    return <p className="text-center text-primary-600 font-2xl font-semibold">Loading...</p>
  }
  return (
    <div>
      <h3 className="text-3xl">Payment for {booking.treatement}</h3>
      <p>
        Please Pay ${booking.price} for Your Appointment on{" "}
        {booking.appointmentDate} at {booking.slot}
      </p>
      <div className="w-96 my-12 p-5">
        <Elements stripe={stripePromise}>
          <CheckOutForm
          booking={booking}
          ></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
