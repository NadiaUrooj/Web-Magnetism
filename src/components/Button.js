import React from "react";
import Background from "../images/background.png";

const Button = ({ text, variant }) => {
  const commonClasses =
    "rounded-full text-base py-3 px-7 uppercase flex items-center font-semibold mb-4";

  const styles = {
    button1: {
      buttonClass: `border border-white text-white ${commonClasses}`,
      iconFill: "white",
      customStyle: {
        background: "linear-gradient(to right, #fc66c3, #c46aa9)",
      },
    },
    button2: {
      buttonClass: `${commonClasses} border-2 text-black border-rose-600 font-normal px-5`,
      iconFill: "black",
      customStyle: {
        backgroundColor: "white",
      },
    },
    button3: {
      buttonClass: `${commonClasses} text-white `,
      iconFill: "white",
      customStyle: {
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
    button4: {
      buttonClass: `rounded-lg text-center py-2 px-6 flex items-center justify-center font-semibold mb-4 border-2 text-white w-full`,
      iconFill: "white",
      customStyle: {
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
    button5: {
      buttonClass: `rounded-lg text-center py-3  px-6 lg:px-4 flex items-center justify-center font-semibold  text-lg text-black uppercase`,
      customStyle: {
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        Image: "src{insideBtn}",
      },
    },
    button6: {
      buttonClass: `border border-white text-white ${commonClasses}`,
      iconFill: "white",
      customStyle: {
        background: "linear-gradient(to right, #fc66c3, #8e66df )",
      },
    },
  };

  const { buttonClass, iconFill, customStyle } =
    styles[variant] || styles.button1;

  return (
    <button className={buttonClass} style={customStyle}>
      {text}
      {variant !== "button5" && (
        <svg
          className="ml-2 w-4 h-4"
          fill={iconFill}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.293 16.707a1 1 0 010-1.414L12.586 6H9a1 1 0 110-2h7a1 1 0 011 1v7a1 1 0 11-2 0V7.414l-9.293 9.293a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  );
};

export default Button;
