import React from "react";
import "../App.css";
import Wave from "../images/bg4 waves.png";
import Image1 from "../images/insight1.png";
import Image2 from "../images/insight2.png";
import Image3 from "../images/insight3.png";

const Insights = () => {
  return (
    <div>
      {" "}
      <img src={Wave} alt="" className="w-100vw " />
      <div className="  bg-white py-10 px-4 md:px-10 lg:px-8 lg:mt-[-24%] md:mt-[-30%]  mt-[-30%]">
        <h2 className="text-white font-bold mt-[-3%] text-centre  text-lg lg:text-3xl">
          Latest Insights
        </h2>
        <div className="   flex flex-wrap justify-center gap-2">
          <div className=" text-left py-5 px-2 w-60 lg:w-80 md:w-1/3 h-auto hover:cursor-pointer">
            <img
              src={Image1}
              alt="Insight 1"
              className="w-full  object-cover mb-4"
            />
            <div
              className="transition duration-200 ease-in-out transform hover:scale-105 shadow-xl 
            p-4 hover:bg-gray-50 hover:cursor-pointer"
            >
              {" "}
              <h3 className="  text-xl font-normal mb-2 capitalize">
                Websites accesibility and why it matters
              </h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
                vulputate aen dolor sit amet conss ...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">25.01.2024</span>
                <a href="/" className="text-sm gradient-text ">
                  <u className="decoration-red-600 decoration-0 ">Read More</u>
                </a>
              </div>
            </div>
          </div>{" "}
          <div className=" text-left py-5 px-2 w-60 lg:w-80 md:w-1/3 h-auto hover:cursor-pointer">
            <img
              src={Image2}
              alt="Insight 2"
              className="w-full  object-cover mb-4"
            />
            <div
              className="transition duration-200 ease-in-out transform hover:scale-105 shadow-xl 
            p-4 hover:bg-gray-50 hover:cursor-pointer"
            >
              {" "}
              <h3 className="  text-xl font-normal mb-2 capitalize">
                Websites accesibility and why it matters
              </h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
                vulputate aen dolor sit amet conss ...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">25.01.2024</span>
                <a href="/" className="text-sm gradient-text ">
                  <u className="decoration-red-600 decoration-0 ">Read More</u>
                </a>
              </div>
            </div>
          </div>{" "}
          <div className=" text-left py-5 px-2 w-60 lg:w-80 md:w-1/3 h-auto hover:cursor-pointer">
            <img
              src={Image3}
              alt="Insight 3"
              className="w-full  object-cover mb-4"
            />
            <div
              className="transition duration-200 ease-in-out transform hover:scale-105 shadow-xl 
            p-4 hover:bg-gray-50 hover:cursor-pointer"
            >
              {" "}
              <h3 className="  text-xl font-normal mb-2 capitalize">
                Websites accesibility and why it matters
              </h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
                vulputate aen dolor sit amet conss ...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">25.01.2024</span>
                <a href="/" className="text-sm gradient-text ">
                  <u className="decoration-red-600 decoration-0 ">Read More</u>
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Insights;
