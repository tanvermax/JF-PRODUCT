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
    <div className="relative     ">
      <div className="flex items-center justify-center gap-6 overflow-hidden">

        {/* Left Partial Slide */}
        <div className="w-2/6 -left-36 relative hidden md:block bg-white rounded-3xl p-4">
          <img
            src={sliderData[getLeftIndex()].image}
            alt={sliderData[getLeftIndex()].title}
            className="rounded-2xl"
          />
        </div>

        {/* Center Main Slide */}
        <div className="grid grid-cols-2 md:flex-row bg-[#f3f4f6] rounded-3xl shadow-md p-2 md:p-5 w-[100vw] items-center gap-8 relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-lime-400 hover:bg-lime-500 text-black w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md"
          >
            <LuArrowLeft />

          </button>

          {/* Image */}
          <div className="  inset-0 rounded-2xl  bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px]">
            <img
              src={sliderData[current].image}
              alt={sliderData[current].title}
              className="rounded-2xl p-10"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {sliderData[current].title}
            </h2>
            <p className="text-gray-700 mb-4 text-lg">{sliderData[current].description}</p>
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-5 rounded-full shadow">
              Shop Now
            </button>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-lime-400 hover:bg-lime-500 text-black w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md"
          >
            <GoArrowRight />

          </button>
        </div>

        {/* Right Partial Slide */}
        <div className="w-1/5 hidden md:block bg-white rounded-3xl p-4">
          <img
            src={sliderData[getRightIndex()].image}
            alt={sliderData[getRightIndex()].title}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
