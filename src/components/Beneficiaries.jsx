import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import image1 from "../assets/FAF Beneficiaries/IMG_8046.PNG";
import image2 from "../assets/FAF Beneficiaries/IMG_8048.PNG";
import image3 from "../assets/FAF Beneficiaries/IMG_8051.PNG";
import image4 from "../assets/FAF Beneficiaries/IMG_8052.PNG";
import image5 from "../assets/FAF Beneficiaries/IMG_8055.PNG";

const Beneficiaries = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div>
      {" "}
      <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-blue-700/80">
        <h1 className="text-3xl font-bold">Beneficiaries</h1>
      </div>
      <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative">
        <div
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          style={{ backgroundImage: `url(${image1})` }}
        ></div>
        {/*left arrow*/}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft size={30} />
        </div>
        {/*right arrow*/}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Beneficiaries;
