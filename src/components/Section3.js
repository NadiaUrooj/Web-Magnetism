import Image from "../images/Section3image.png";

const Section3 = () => {
  return (
    <div className="bg-white py-28">
      <div className="container mx-auto px-10 lg:px-18  flex flex-col items-center">
        <h2 className="text-2xl lg:text-4xl font-normal mb-8 max-w-2xl text-center capitalize">
          An Integrated Team for unique Web design and strategic digital
          marketing
        </h2>
        <p className="max-w-2xl text-medium mb-10 text-center">
          Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
          vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales
          lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan.
        </p>
        <div className="flex justify-center w-full">
          <img src={Image} alt="Our Work" className="w-70vw" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
