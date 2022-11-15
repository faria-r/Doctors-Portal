import React from "react";

const Review = ({ data }) => {
  const { name, image, description, location } = data;
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <p>{description}</p>
        <div className="flex items-center">
          <div className="avatar mr-6 ">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image} alt='' />
            </div>
          </div>
          <div>
            <h5 className="text-lg">{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
