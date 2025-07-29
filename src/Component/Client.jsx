import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import photo from "./../assets/client.png";

const testimonials = [
    {
        id: 1,
        name: "Samuel Varughese",
        review:
            "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
        avatar: photo,
        tooltip: "Farhan Adnan Masum",
    },
    {
        id: 2,
        name: "Samuel Varughese sdsdv",
        review:
            "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
        avatar: photo,
        tooltip: "Farhan Adnan Masum",
    },
];

const Testimonial = () => {
    const [current, setCurrent] = useState(0);
    const testimonial = testimonials[current];

    return (
        <div className="max-w-[95%] sm:max-w-4xl md:max-w-5xl mx-auto my-6 sm:my-8 md:my-10 px-4 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Left Box */}
            <div className="relative p-6 sm:p-8 md:p-10 rounded-md bg-gray-50 w-full md:w-2/3">
                <FaQuoteLeft className="text-[#B0DD1D] text-5xl sm:text-6xl md:text-7xl my-6 md:my-10" />
                <p className="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-relaxed">
                    {testimonial.review}
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 py-4 sm:py-5 px-3 rounded-2xl bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px]">
                    <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-gray-800">
                        - {testimonial.name}
                    </span>
                    <div className="flex gap-2 mt-4 sm:mt-0">
                        <button
                            className="p-1 text-xl sm:text-2xl rounded-full border-dotted border-[1px] hover:bg-pink-200"
                            onClick={() =>
                                setCurrent((prev) =>
                                    prev === 0 ? testimonials.length - 1 : prev - 1
                                )
                            }
                            aria-label="Previous testimonial"
                        >
                            <BsArrowLeft />
                        </button>
                        <button
                            className="p-1 text-xl sm:text-2xl rounded-full border-dotted border-[1px] hover:bg-pink-200"
                            onClick={() =>
                                setCurrent((prev) =>
                                    prev === testimonials.length - 1 ? 0 : prev + 1
                                )
                            }
                            aria-label="Next testimonial"
                        >
                            <BsArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Image Box */}
            <div className="relative w-full sm:w-3/4 md:w-1/3 h-64 sm:h-80 md:h-110 rounded-2xl overflow-hidden p-2 bg-gray-200">
                <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full rounded-2xl object-cover"
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