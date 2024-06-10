import React from "react";
import Service1 from "../images/Service1.png";
import Service2 from "../images/Service2.png";
import Service3 from "../images/Service3.jpg";
import Button from "./Button.js";

const Services = () => {
  return (
    <div className=" bg-white min-h-screen flex flex-col items-center pt-20 px-10 lg:p-24 ">
      <h2 className="text-4xl lg:text-5xl text-dark mb-5 capitalize">
        Overview of Services
      </h2>
      <div className="flex flex-wrap justify-center w-full">
        <ServiceCard image={Service1} title="Bespoke Web Design">
          Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing
          libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae.
          Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat
        </ServiceCard>
        <ServiceCard image={Service2} title="App Development">
          Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing
          libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae.
          Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat
        </ServiceCard>
        <ServiceCard image={Service3} title="Digital Marketing">
          Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing
          libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae.
          Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat
        </ServiceCard>
      </div>
    </div>
  );
};

const ServiceCard = ({ image, title, children }) => {
  return (
    <div className="bg-white rounded-lg p-6 mx-4 mb-8 w-80 lg:text-left">
      <img src={image} alt={title} className="w-auto mb-4" />
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-700 mb-6 ">{children}</p>
        <Button text={title} variant="button2" />
      </div>
    </div>
  );
};

export default Services;
