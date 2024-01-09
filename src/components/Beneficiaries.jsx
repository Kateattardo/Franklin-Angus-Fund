import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import image1 from "../assets/FAF Beneficiaries/IMG_8046.PNG";
import image2 from "../assets/FAF Beneficiaries/IMG_8048.PNG";
import image3 from "../assets/FAF Beneficiaries/IMG_8051.PNG";
import image4 from "../assets/FAF Beneficiaries/IMG_8052.PNG";
import image5 from "../assets/FAF Beneficiaries/IMG_8055.PNG";

const Beneficiaries = () => {
  const images = [image1, image2, image3, image4, image5];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImage = (imageIndex) => {
    setCurrentIndex(imageIndex);
  };

  return (
    <div>
      {" "}
      <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-blue-700/80">
        <h1 className="text-3xl font-bold">Beneficiaries</h1>
      </div>
      <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
        <div
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>
        {/* <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`w-full h-full object-cover rounded-2xl ${
              currentIndex === index ? "block" : "hidden"
            }`}
          />
        ))} */}

        {/*left arrow*/}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevImage} size={30} />
        </div>
        {/*right arrow*/}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextImage} size={30} />
        </div>

        <div className="flex top-4 justify-center py-2">
          {images.map((image, imageIndex) => (
            <div
              className="text-2xl cursor-pointer"
              key={imageIndex}
              onClick={() => goToImage(imageIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beneficiaries;
