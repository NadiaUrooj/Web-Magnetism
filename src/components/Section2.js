import React from "react";
import imageSection2 from "../images/imageSection2.png";
import Button from "./Button";
import Wave from "../images/Wave.png";

const Section2 = () => {
  return (
    <div className="relative">
      <img
        src={Wave}
        alt="Wave"
        className="absolute top-0 left-0 w-full z-0"
        style={{ marginTop: "-70px" }} // Adjust the amount to show a bit of the wave on the previous page
      />
      <div className="flex flex-wrap bg-white px-10 lg:px-24 py-12 lg:py-24 relative z-10">
        <div className="lg:w-1/2 lg:pr-16 ">
          <h2 className="font-semibold text-3xl lg:text-4xl mb-6">
            Welcome to Web Magnetism
          </h2>
          <p className="mb-4 text-left font-light text-base lg:text-lg max-w-lg">
            Your hub for bespoke web design and digital marketing success. We
            seamlessly merge creativity and{" "}
            <span className="font-medium">SEO expertise</span> to craft visually
            stunning websites that magnetize audiences.
          </p>
          <p className="mb-4 text-left font-light max-w-lg">
            Our digital marketing, from SEO mastery to impactful campaigns,
            ensures your brand's resonance online. At Web Magnetism, we're not
            just designers;
            <span className="font-medium">we're digital architects,</span>{" "}
            sculpting unique online experiences that elevate your brand.
          </p>
          <p className="mb-4 text-left font-light max-w-lg">
            Navigate the digital landscape with confidence – choose Web
            Magnetism for tailored web design and{" "}
            <span className="font-medium">strategic digital marketing,</span>{" "}
            where innovation meets results for a compelling online journey.
          </p>
          <Button text="About Us" variant="button3" />
        </div>
        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <img src={imageSection2} alt="Section 2" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
