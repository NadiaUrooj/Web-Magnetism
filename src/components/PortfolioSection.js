import React from "react";
import Portfolio from "../images/work.png";
import skipBtn from "../images/skip page.png";
import ReviewImage from "../images/reviews.png";
import Button from "./Button";

const OurWork = () => {
  return (
    <div className="min-h-screen p-8 lg:p-28 bg-white">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:w-1/2 text-left w-full lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Work</h2>
          <p className="text-gray-700 mb-5">
            We don’t claim to be gurus or wizards. We’re just a super
            experienced, passionate team who knows how to get results for our
            clients. All our work is custom and thoughtfully designed, written,
            and developed with your business goals in mind.
          </p>
        </div>
        <div className="flex justify-end items-center lg:w-1/2 lg:self-end mt-5 lg:mt-0">
          <Button text="view full portfolio" variant="button3" />
        </div>
      </div>
      <div className="mt-10">
        <img src={Portfolio} alt="Portfolio" className="mb-4 w-full h-auto" />
        <div className="flex justify-center">
          <img src={skipBtn} alt="Skip Button" className="w-24 h-auto" />
        </div>
      </div>

      {/* New Section for Client Reviews */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-normal capitalize mb-8 w-auto">
          What our clients say about us
        </h2>
        <div className="flex justify-center mb-4">
          <img
            src={ReviewImage}
            alt="Review"
            className="w-full w-auto h-auto hover:cursor-pointer"
          />
        </div>
        <div className="flex justify-center">
          <img src={skipBtn} alt="Skip Button" className="w-24 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
