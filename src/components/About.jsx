import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-blue-700/80">
        <h1 className="text-3xl font-bold">About</h1>
      </div>
      <div className="p-4 mt-12">
        <p className="text-base text-gray-700">
          Here is the write up for Franklin Angus Fund and all it's details
        </p>
      </div>
    </>
  );
};

export default About;
