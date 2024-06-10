import React from "react";
import Wave from "../images/Wave.png"; // Adjust the path to your Wave image

const Background = ({ children }) => {
  return (
    <div className="relative">
      {/* First background */}
      <div
        className="min-h-screen flex flex-col p-1 items-center space-y-20"
        style={{
          fontFamily: "sans-serif",
          background: "linear-gradient(to right, #8c65e1, #e48476)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Background;
