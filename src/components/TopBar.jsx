import React from "react";
import logo from "../assets/FAF Logo/IMG_7507.JPG";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <img src={logo} alt="Franklin Angus Fund Logo" className="h-40" />
      </div>
      <div>
        <p className="text-sm text-grey-700">
          Helping Dogs and thier Owners since 2000
        </p>
        <button>Donate Now</button>
      </div>
    </div>
  );
};

export default TopBar;
