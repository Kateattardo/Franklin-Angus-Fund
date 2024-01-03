import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-grey-700">
          Franklin Angus Fund{" "}
        </h1>
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
