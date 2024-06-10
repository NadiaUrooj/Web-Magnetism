import React from "react";
import bg from "../images/background2.png";
import Icon1 from "../images/icon 1.svg";
import Icon2 from "../images/icon 2.svg";
import Icon3 from "../images/icon 3.svg";

const WhyChooseUs = () => {
  return (
    <div
      className="bg-top bg-cover min-h-screen flex flex-col items-center p-10 md:p-16 lg:p-28 -mt-12"
      style={{
        backgroundImage: `url(${bg})`,
        width: "100vw",
      }}
    >
      <h2 className="text-4xl font-bold text-dark mb-10 capitalize w-80">
        Why choose us
      </h2>
      <div className="flex flex-wrap justify-center space-x-0 md:space-x-4 space-y-6">
        <div className="bg-white text-left rounded-lg shadow-lg p-5 mt-4 w-80 h-auto transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 hover:cursor-pointer">
          <div className="flex items-center mb-4">
            <img src={Icon1} alt="Icon 1" className="h-1/3 mr-6 " />
            <h3 className="text-lg font-semibold ">
              Take Control of Your Entire Marketing Landscape
            </h3>
          </div>
          <p className="text-gray-700 mb-0">
            We've curated top-tier teams under one roof, enabling you to bypass
            the complexities of overseeing a network of agencies and internal
            hires.
          </p>
        </div>
        <div className="bg-white text-left rounded-lg shadow-lg p-6 mb-4 w-80 h-auto transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 hover:cursor-pointer">
          <div className="flex items-center mb-4">
            <img src={Icon2} alt="Icon 1" className="h-1/3 mr-6 " />
            <h3 className="text-lg font-semibold ">
              Your Business's Dedicated Marketing Wing
            </h3>
          </div>
          <p className="text-gray-700">
            Even if your business is modest in size, having a well-versed
            extension focused on digital marketing provides a distinct
            competitive edge.
          </p>
        </div>
        <div className="bg-white text-left rounded-lg shadow-lg p-6 mb-4 w-80 h-auto transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 hover:cursor-pointer">
          <div className="flex items-center mb-4">
            <img src={Icon3} alt="Icon 3" className="h-1/3 mr-6 " />
            <h3 className="text-lg font-semibold ">A Reliable Collaborator</h3>
          </div>
          <p className="text-gray-700">
            Our exceptional team members function seamlessly as an integral part
            of your team, fully committed to your success and the sanctity of
            your brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
