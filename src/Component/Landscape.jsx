import React, { useState } from 'react';
import { BsArrowRightCircle } from "react-icons/bs";


const Landscape = () => {
  const products = [
    {
      id: 1,
      name: "JAntiqo Fence",
      price: "₹10,024.00 – ₹14,984.82",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQ6Q-asa4YcyjWTQ9_pEx-H2BL--nrsXYpw&s",

    },
    {
      id: 2,
      name: "JF Australian Trellis",
      price: "₹6,962.00",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SxrkqrgJUYk4mDc-4gh-lP9ajySR-xEENQ&s",
    },
    {
      id: 3,
      name: "JF Polyhex Mesh",
      price: "₹4,050.00 – ₹10,770.00 ",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBeOSaD39hMGJeMqt9k-rBFYDkVjaRlXqEQ&s",

    },
    {
      id: 4,
      name: "JJF Privezy Grass Wall",
      price: "₹1,646.10 – ₹18,284.10",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7C4kZ4j7sstt9IgOMayzVm4W0VZNf-2mI_A&s",

    },
    {
      id: 11,
      name: "JAntiqo Fence",
      price: "₹4,995.00",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQ6Q-asa4YcyjWTQ9_pEx-H2BL--nrsXYpw&s",

    },
    {
      id: 21,
      name: "JF Australian Trellis",
      price: "₹499.00 – ₹1,589.00",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SxrkqrgJUYk4mDc-4gh-lP9ajySR-xEENQ&s",
    },
    {
      id: 31,
      name: "JF Polyhex Mesh",
      price: "₹4,050.00 – ₹10,770.00 ",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBeOSaD39hMGJeMqt9k-rBFYDkVjaRlXqEQ&s",

    },
    {
      id: 41,
      name: "JJF Privezy Grass Wall",
      price: "₹1,646.10 – ₹18,284.10",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7C4kZ4j7sstt9IgOMayzVm4W0VZNf-2mI_A&s",

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
      <h1 className="text-3xl font-semibold  py-8">Landscape Products</h1>
      
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

export default Landscape;