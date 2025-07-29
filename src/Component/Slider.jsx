import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { LuArrowLeft } from "react-icons/lu";

const sliderData = [
  {
    id: 1,
    title: "JF Privezy Grass Wall",
    description: "The Perfect Blend Of Greenery",
    image: "https://i.ibb.co/zhvGVYCQ/Screenshot-2025-07-29-18-03-36.png",
  },
  {
    id: 2,
    title: "Chain Link Fencing",
    description: "Durable and Reliable",
    image: "https://s.alicdn.com/@sc04/kf/Hc02ac66a9b084ecc881665349cc1a097u/New-Design-Customized-Jungle-Style-Vertical-Plants-Wall-Artificial-Wall-Hanging-Plant-Green-Grass-Wall-for-Home-Decoration.jpg",
  },
  {
    id: 3,
    title: "Artificial Hedge Wall",
    description: "Beautiful & Low Maintenance",
    image: "https://m.media-amazon.com/images/I/A16WyN9Y-LL.jpg",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const getLeftIndex = () => (current === 0 ? sliderData.length - 1 : current - 1);
  const getRightIndex = () => (current === sliderData.length - 1 ? 0 : current + 1);

  return (
    <div className="relative  px-4 md:px-12 py-10 ">
      <div className="relative flex justify-center items-center">

        {/* Left Card Preview */}
        <div className="absolute left-[-120px] hidden lg:block z-0">
          <div className="w-110 h-[60vh] bg-white p-4 rounded-3xl shadow bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px]">
            <img
              src={sliderData[getLeftIndex()].image}
              alt="Left Slide"
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right Card Preview */}
        <div className="absolute right-[-120px] hidden lg:block z-0">
          <div className="w-110 h-[60vh] bg-white p-4 rounded-3xl shadow bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px]">
            <img
              src={sliderData[getRightIndex()].image}
              alt="Right Slide"
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Center Main Slide */}
        <div className="relative z-10 w-full lg:w-[60%] bg-[#f3f4f6] rounded-3xl shadow-md md:p-6 p-2 grid grid-cols-2 gap-8">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-lime-400 hover:bg-lime-500 text-black w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center md:text-xl shadow-md"
          >
            <LuArrowLeft />
          </button>

          {/* Image */}
          <div className="w-full p-2 md:h-full  h-30 my-auto bg-white rounded-2xl bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] flex items-center justify-center">
            <img
              src={sliderData[current].image}
              alt={sliderData[current].title}
              className="rounded-2xl  md:p-6 object-contain"
            />
          </div>

          {/* Text */}
          <div className=" text-center md:text-left content-center">
            <h2 className="text-base md:text-[62px] font-medium text-gray-900 mb-2">
              {sliderData[current].title}
            </h2>
            <p className="text-gray-700 mb-4 text-[9px] md:text-lg md:py-5">
              {sliderData[current].description}
            </p>
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold md:py-2 md:px-5 px-3 py-1 rounded-full text-[9px] md:text-base shadow">
              Shop Now
            </button>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-lime-400 hover:bg-lime-500 text-black w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center text-xl shadow-md"
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
