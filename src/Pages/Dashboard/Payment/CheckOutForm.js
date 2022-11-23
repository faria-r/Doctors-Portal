import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckOutForm = ({booking}) => {
    const [cardError,setCardError] = useState('');
    const [success,setSuccess] = useState('');
    const [processing,setProcessing] = useState(false)
    const [transactionId,setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    console.log('client secret',clientSecret)
    const {price,email,patient, _id} = booking;
    const stripe = useStripe();
    const elements = useElements();



    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("https://y-faria-r.vercel.app/create-payment-intent", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
        authorization:`bearer ${localStorage.getItem('Access-token')} `
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) =>{
            setClientSecret(data.clientSecret);
            console.log(data.clientSecret,'decret');
        });
    }, [price]);
    const handleSubmit = async(event) =>{
        event.preventDefault();
        console.log('inside pay');
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log(error);
            setCardError(error.message)
        }
        else{
            setCardError('')
        }

        setSuccess('');
        setProcessing(true)

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patient,
                  email:email
                },
              },
            },
          );
          if(confirmError){
            setCardError(confirmError.message);
            return;
          }
          if(paymentIntent.status === "succeeded"){

            
            const payment = {
price,
transactionId:paymentIntent.id,
email,
bookingId: _id
            }
            //store payment info in database
            fetch('https://y-faria-r.vercel.app/payments',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    authorization:`bearer ${localStorage.getItem('Access-token')}`
                },
                body:JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    setSuccess('Congratultaion! Your payment is completed');
                    setTransactionId(paymentIntent.id);
                }
            })
          }
          setProcessing(false)
          console.log('Payment Intent',paymentIntent)

    }
    return (
       <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className='btn btn-sm mt-4 btn-primary' disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    <p className='text-red-500 font-semibold'>{cardError}</p>
    {
        success && <div>
            <p className='text-green-500'>{success}</p>
            <p>Your Transaction ID: <span className='font-bold font-xl'>{transactionId}</span></p>
        </div>
    }
       </>
    );
};

export default CheckOutForm;