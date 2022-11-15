import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './banner/Banner';
import Exceptional from './Exceptional/Exceptional';
import Cards from './InfoCards/Cards';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
         <Cards></Cards>
         <Services></Services>
         <Exceptional></Exceptional>
         <MakeAppoinment></MakeAppoinment>
         <Testimonial></Testimonial>
        </div>
    );
};

export default Home;