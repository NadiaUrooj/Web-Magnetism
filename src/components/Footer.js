import React from "react";
import Button from "./Button";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/icon5.png";
import icon6 from "../images/icon6.png";
import Subscribe from "../images/subscribe.png";
const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="bg-black text-white p-20">
        <div
          className="space-y-10 lg:space-y-0 flex-justify-column
        lg:flex justify-between 
        md:items-center "
        >
          <Button text="Web Magnetism" variant="button5" />
          <Button text="Contact Us" variant="button3" />
        </div>
        <hr
          style={{
            marginTop: "16px",

            border: "none",
            height: "2px",
            background: "linear-gradient(to right, #fc66c3, #c46aa9)",
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 text-left w-80 lg:w-auto ">
          <div>
            <h3 className="text-lg font-semibold  mb-2 mt-6 capitalize">
              Services
            </h3>
            <hr
              style={{
                marginTop: "8px",
                marginBottom: "16px",
                width: "80%",
                border: "none",
                height: "1px",
                background: "white",
              }}
            />
            <ul className="list-none text-gray-400">
              <h4 className="text-white mb-2">Digital Marketing</h4>
              <li>Email Nurture</li>
              <li>SEO</li>
              <li>Social Media Marketing</li>
              <li>Conversion Rate Optimization</li>
              <li>Copy Writing</li>
              <li>Email Marketing</li>
              <li>Remarketing</li>
              <li>PPC</li>
            </ul>
          </div>
          {/* Bespoke Web Design */}
          <div>
            <h4 className="text-white mb-2 mt-20">Bespoke Web Design</h4>
            <ul className="list-none  text-gray-400">
              <li>Web Design</li>
              <li>Web Redesign</li>
              <li>UI/UX Design</li>
              <li>Brand Indentity and Logo</li>
            </ul>
            <h4 className="text-white mt-4">App Development</h4>
            <ul className="list-none text-gray-400"></ul>
          </div>
          {/* Home, About Us, Contact Us */}
          <div className="lg:ml-20 lg:w-80">
            <h3 className="text-lg font-semibold mb-2 mt-6  capitalize">
              Home
            </h3>
            <hr
              style={{
                marginTop: "8px",
                marginBottom: "16px",
                width: "30%",
                border: "none",
                height: "1px",
                background: "white",
              }}
            />
            <h3 className="text-lg font-semibold mb-2 mt-4 capitalize">
              About us
            </h3>
            <hr
              style={{
                marginTop: "8px",
                marginBottom: "16px",
                width: "40%",
                border: "none",
                height: "1px",
                background: "white",
              }}
            />
            <h3 className="text-lg font-semibold mb-2 mt-4 capitalize">
              Contact us
            </h3>
            <hr
              style={{
                marginTop: "8px",
                marginBottom: "16px",
                width: "40%",
                border: "none",
                height: "1px",
                background: "white",
              }}
            />
            <ul className="mt-20 text-gray-400">
              <li>United Kington,</li>
              <li>TW4 7LULondon</li>
            </ul>
          </div>
          {/* Resources */}
          <div className="list-none text-gray-400 mb-2 mt-6 lg:ml-20">
            <h3 className="text-white  font-semibold text-lg mb-2">
              Resources
            </h3>
            <hr
              style={{
                marginTop: "8px",
                marginBottom: "16px",
                width: "40%",
                border: "none",
                height: "1px",
                background: "white",
              }}
            />
            <ul>
              <li>Our Work</li>
              <li>Insights</li>
            </ul>
          </div>
          {/* Social Media Icons */}
          <div className="flex flex-col mb-2 mt-6 lg:ml-20 lg:w-80">
            <h3 className="font-semibold text-lg mb-4">Social media</h3>
            <hr
              style={{
                marginTop: "8px",
                marginBottom: "16px",
                width: "50%",
                border: "none",
                height: "1px",
                background: "white",
              }}
            />
            <div className="flex items-center transition-all duration-100 ease-in-out hover:scale-105 cursor-pointer">
              <img src={icon1} alt="Facebook" className="w-8 h-8 mr-2 mb-2" />
              <span className="text-gray-400">Facebook</span>
            </div>
            <div className="flex items-center transition-all duration-100 ease-in-out hover:scale-105 cursor-pointer">
              <img src={icon2} alt="Instagram" className="w-8 h-8 mr-2 mb-2" />
              <span className="text-gray-400">Instagram</span>
            </div>
            <div className="flex items-center transition-all duration-100 ease-in-out hover:scale-105 cursor-pointer">
              <img src={icon3} alt="Twitter" className="w-8 h-8 mr-2 mb-2" />
              <span className="text-gray-400">Twitter</span>
            </div>
            <div className="flex items-center transition-all duration-100 ease-in-out hover:scale-105 cursor-pointer">
              <img src={icon4} alt="Telegram" className="w-8 h-8 mr-2 mb-2" />
              <span className="text-gray-400">Telegram</span>
            </div>{" "}
            <div className="flex items-center transition-all duration-100 ease-in-out hover:scale-105 cursor-pointer">
              <img src={icon5} alt="Youtube" className="w-8 h-8 mr-2 mb-2" />
              <span className="text-gray-400">Youtube</span>
            </div>
            <div className="flex items-center transition-all duration-100 ease-in-out hover:scale-105 cursor-pointer">
              <img src={icon6} alt="Tiktok" className="w-8 h-8 mr-2 mb-2" />
              <span className="text-gray-400">Tiktok</span>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-end justify-left lg:px-20 mt-10">
          <div className="flex flex-col gap-2 text-gray-400">
            <span>Subscribe to our weekly newsletter today!</span>
            <img src={Subscribe} alt="" />
          </div>
        </div>

        <div className="flex justify-center pt-10 text-gray-400">
          ©Copyright. 2024 Web Magnetism All rights reserved I Terms and
          condition I Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default Footer;
