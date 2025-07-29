import React, { useState } from 'react';
import { BsArrowRightCircle } from "react-icons/bs";


const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      name: "JF Barbed Wire- 270 GSM",
      price: "₹4,995.00",
      hasButton: true,
      photo: "https://i0.wp.com/noags.co.za/wp-content/uploads/1103002.jpg?fit=500%2C497&ssl=1",

    },
    {
      id: 2,
      name: "FGC RustFree Fencing Poles",
      price: "₹499.00 – ₹1,589.00",
      hasButton: true,
      photo: "https://justfence.in/wp-content/uploads/2024/11/FGC-rec-5-pipe.jpg",
    },
    {
      id: 3,
      name: "GI Poultry Mesh",
      price: "₹1,260.00 – ₹10,750.00",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdUrtAam-RFEEzmvBvYRSC7Xiy9bfVxrorw&s",

    },
    {
      id: 4,
      name: "JF Bluelink Mesh",
      price: "IT1,646.10 – IT8,284.10",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK44558cycZ7ILiWTu2IzvJEeHlHeuRsJNTw&s",

    },
    {
      id: 11,
      name: "JF Barbed Wire- 270 GSM",
      price: "₹4,995.00",
      hasButton: true,
      photo: "https://i0.wp.com/noags.co.za/wp-content/uploads/1103002.jpg?fit=500%2C497&ssl=1",

    },
    {
      id: 21,
      name: "FGC RustFree Fencing Poles",
      price: "₹499.00 – ₹1,589.00",
      hasButton: true,
      photo: "https://justfence.in/wp-content/uploads/2024/11/FGC-rec-5-pipe.jpg",
    },
    {
      id: 31,
      name: "GI Poultry Mesh",
      price: "₹1,260.00 – ₹10,750.00",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdUrtAam-RFEEzmvBvYRSC7Xiy9bfVxrorw&s",

    },
    {
      id: 41,
      name: "JF Bluelink Mesh",
      price: "IT1,646.10 – IT8,284.10",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK44558cycZ7ILiWTu2IzvJEeHlHeuRsJNTw&s",

    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 <= products.length - cardsToShow ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 >= 0 ? prevIndex - 1 : products.length - cardsToShow
    );
  };

  // Calculate which products to display
  const visibleProducts = products.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold  py-8">Agricultural Products</h1>
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <div key={product.id} className="bg-[#F2F4F6] rounded-lg shadow-md p-1 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-3">
                <img className='rounded-3xl h-64' src={product.photo} alt="" />
                <h3 className="text-xl py-4 font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 pb-5">{product.price}</p>
                {product.hasButton && (
                  <button className=" bg-[#B0DD1D] text-black hover:bg-green-700  py-2 px-4 rounded-4xl transition-colors">
                    Shop Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full   hover:bg-gray-100 transition-colors"
        >
                  <BsArrowRightCircle className='text-4xl text-[#575656] rotate-180 ' />

        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full shadow-md  hover:bg-gray-100 transition-colors"
        >
         <BsArrowRightCircle className='text-4xl  text-[#575656] '/>


        </button>
      </div>
      
    </div>
  );
};

export default ProductCarousel;