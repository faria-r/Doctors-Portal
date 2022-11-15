import React from "react";
import Clock from "../../../assets/icons/clock.svg";
import Marker from "../../../assets/icons/marker.svg";
import Phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Cards = () => {
  const CardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to 5.00pm Everyday",
      icon: Clock,
      bgClass: "bg-primary",
    },
    {
      id: 2,
      name: "Our Location",
      description: "Open 9.00 am to 5.00pm Everyday",
      icon: Marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "Open 9.00 am to 5.00pm Everyday",
      icon: Phone,
      bgClass: "bg-primary",
    },
  ];
  return (
    <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default Cards;
/**
 * 
 daisyui: {
      themes: [
        {
          Doctors-theme: {       
          primary: "#0FCFEC",      
          secondary: "#19D3AE",       
          accent: "#3A4256",        
          neutral: "#20134E",       
          "base-100": "#2D1B69",
          },
        },
      ],
    },
 */
