import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import photo from "./../assets/client.png"
const testimonials = [
    {
        id: 1,
        name: "Samuel Varughese",
        review:
            "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
        avatar:
            photo, // use your uploaded image here
        tooltip: "Farhan Adnan Masum",
    },
    {
        id: 2,
        name: "Samuel Varughese sdsdv",
        review:
            "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
        avatar:
            photo, // use your uploaded image here
        tooltip: "Farhan Adnan Masum",
    },
];

const Testimonial = () => {
    const [current, setCurrent] = useState(0);
    const testimonial = testimonials[current];

    return (
        <div className="max-w-5xl mx-auto my-10 px-4 flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Left Box */}
            <div className="relative   p-6 rounded-md bg-gray-50 w-full md:w-2/3">
                {/* Tooltip */}
                <div className="absolute -left-24 top-10 flex items-center">
                    {/*  */}
                    <div className="w-3 h-3 bg-pink-500 rotate-45 ml-[-6px]"></div>
                </div>

                <FaQuoteLeft className="text-green-500 text-3xl mb-2" />
                <p className="text-gray-700 leading-relaxed">{testimonial.review}</p>
                <div className="flex justify-between items-center mt-6 bg-gray-100 p-3 rounded-md">
                    <span className="font-bold text-gray-800">
                        - {testimonial.name}
                    </span>
                    <div className="flex gap-2">
                        <button className="p-1 rounded-full hover:bg-pink-200">
                            <IoIosArrowBack />
                        </button>
                        <button className="p-1 rounded-full hover:bg-pink-200">
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Image Box */}
            <div className="relative h-60 rounded-2xl  overflow-hidden p-2 bg-gray-200">
                <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full  rounded-2xl object-cover"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                    {/* <img
                        src="https://i.ibb.co/Jqnpn4g/jf-logo.png"
                        alt="JF Logo"
                        className="w-6 h-6"
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
