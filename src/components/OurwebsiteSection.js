import React from "react";
import Waves from "../images/bg3 waves.png";

import Icon from "../images/icon 2.svg";

import Button from "./Button.js";

const OurWebsiteSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src={Waves}
        alt="Waves"
        className="absolute top-0 left-0 h-100vh w-100vw object-cover pointer-events-none"
      />
      <div className="min-h-screen flex flex-col lg:flex-row p-8 lg:p-28 relative z-10">
        <div className="lg:w-1/2 lg:pr-20 text-left text-white mb-10 lg:mb-0">
          <h2 className="text-2xl lg:text-4xl font-normal my-4 lg:my-8 capitalize">
            Our bespoke website includes the following
          </h2>
          <p className="mb-4 lg:mb-8">
            Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
            vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales
            lacus vulputate aenean aliquam accumsan.
          </p>
          <Button text="Contact us" variant="button6" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="bg-white rounded-lg shadow-lg px-6 py-4 lg:px-10 lg:py-6 my-2 lg:my-5 mx-4 lg:mx-8 w-full lg:w-11/12 text-gray-700 transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 hover:cursor-pointer">
            <img src={Icon} alt="Icon 1" className="w-20 h-20 mb-4 lg:mb-8" />
            <h3 className="text-left text-xl font-semibold mb-2 lg:mb-6">
              Bespoke Design
            </h3>
            <p className="text-left text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
              vulputate aenean aliquam accumsan vestibulum in sit Blandit
              sodales lacus vulputate aenean aliquam accumsan vestibulum in sit
              m accumsan ipsum.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg px-6 py-4 lg:px-10 lg:py-6 my-2 lg:my-5 mx-4 lg:mx-8 w-full lg:w-11/12 text-gray-700 transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 hover:cursor-pointer">
            <img src={Icon} alt="Icon 2" className="w-20 h-20 mb-4 lg:mb-8" />
            <h3 className="text-left text-xl font-semibold mb-2 lg:mb-6">
              Mobile Optimised
            </h3>
            <p className="text-left text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
              vulputate aenean aliquam accumsan vestibulum in sit Blandit
              sodales lacus vulputate aenean aliquam accumsan vestibulum in sit
              m accumsan ipsum.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg px-6 py-4 lg:px-10 lg:py-6 my-2 lg:my-5 mx-4 lg:mx-8 w-full lg:w-11/12 text-gray-700 transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 hover:cursor-pointer">
            <img src={Icon} alt="Icon 3" className="w-20 h-20 mb-4 lg:mb-8" />
            <h3 className="text-left text-xl font-semibold mb-2 lg:mb-6">
              SEO Optimised
            </h3>
            <p className="text-left text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
              vulputate aenean aliquam accumsan vestibulum in sit Blandit
              sodales lacus vulputate aenean aliquam accumsan vestibulum in sit
              m accumsan ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWebsiteSection;
