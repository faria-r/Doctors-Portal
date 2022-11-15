import React from "react";
import quote from "../../assets/icons/quote.svg";
import image1 from '../../assets/images/people1.png'
import image2 from '../../assets/images/people2.png'
import image3 from '../../assets/images/people3.png'
import Review from "./Review";

const Testimonial = () => {

    const testimonialData = [
        {
            id:1,
            name:'Wingston Harry',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat officiis eveniet nulla sunt? Facilis corrupti velit illum animi, consectetur debitis temporibus quae numquam, veniam eaque beatae cum consequatur optio mollitia.',
            location:'California',
            image:image2,
        },
        {
            id:2,
            name:'Mick Jonas',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat officiis eveniet nulla sunt? Facilis corrupti velit illum animi, consectetur debitis temporibus quae numquam, veniam eaque beatae cum consequatur optio mollitia.',
            location:'California',
            image:image1,
        },
        {
            id:3,
            name:'William Carry',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat officiis eveniet nulla sunt? Facilis corrupti velit illum animi, consectetur debitis temporibus quae numquam, veniam eaque beatae cum consequatur optio mollitia.',
            location:'California',
            image:image3,
        }
    ]
  return (
    <div className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-primary text-lg font-bold">Testimonial</h4>
          <h1 className="text-4xl font-bold">What Our Patients Says</h1>
        </div>
        <div>
          <img src={quote} className="lg:w-48 w-24" alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6">
        {
            testimonialData.map(data => <Review
            key={data.id}
            data={data}
            ></Review>)
        }
      </div>
    </div>
  );
};

export default Testimonial;
