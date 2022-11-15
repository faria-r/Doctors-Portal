import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const ServiceData = [
        {
            id:1,
            name:'Flouride Treatment',
            icon:fluoride,
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:2,
            name:'Cavity Filling',
            icon:cavity,
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:3,  
            name:'Teeth Whitening',
            icon:whitening,
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div >
             <h1 className='text-primary text-5xl mt-16 text-center '>Our Services</h1>
             <h1 className='text-primary text-3xl my-4 text-center '> Services We Provide</h1>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8 mb-8'>
           {
                ServiceData.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;