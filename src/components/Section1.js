// Main.js
import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="font-bold text-white text-4xl lg:text-7xl mb-6 uppercase">
        Web Magnetism
      </h1>
      <p className="text-white text-base lg:text-lg capitalize mb-6">
        Transforming Businesses with unique Web design and <br /> strategic
        digital marketing for impactful online visibility.
      </p>
      <Button text="Get a proposal" />
    </div>
  );
};

export default Main;
