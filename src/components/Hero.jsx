import React from "react";
import heroImage from "../assets/Franklin/IMG_2067.JPG";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] relative">
      <img
        src={heroImage}
        alt="Image of dog on a beach"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-[#1E90FF] p-4">
          <h1 className="front-bold text-4xl">
            Helping Dogs And Their Owners since 2000
          </h1>
          <h2 className="text-4xl py-4 italic ">With Franklin Angus Fund</h2>
          <p>Want info here?</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
