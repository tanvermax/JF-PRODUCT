import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import photo from "./../assets/client.png"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
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
            <div className="relative   p-10 rounded-md bg-gray-50 w-full md:w-2/3">
                <FaQuoteLeft className="text-[#B0DD1D] text-7xl my-10" />
                <p className="text-gray-700 text-[28px] leading-relaxed">{testimonial.review}</p>
                <div className="flex justify-between items-center mt-6 py-5 p-3 rounded-2xl  inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px]">
                    <span className="font-bold text-[32px] text-gray-800">
                        - {testimonial.name}
                    </span>
                    <div className="flex gap-2 ">
                        <button
                            className="p-1 text-2xl rounded-full border-dotted border-[1px]  hover:bg-pink-200"
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
                            className="p-1 rounded-full text-2xl border-dotted border-[1px] hover:bg-pink-200"
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
            <div className="relative h-110 rounded-2xl  overflow-hidden p-2 bg-gray-200">
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
