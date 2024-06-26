import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <div>
            <div className="hero my-32">
  <div className="hero-content flex-col lg:flex-row justify-around">
    <img src={treatment} alt='' className=" w-96 rounded-lg shadow-2xl" />
    <div className='w-1/2'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Exceptional;