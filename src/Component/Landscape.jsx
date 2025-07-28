import React, { useState } from 'react';
import photo from "./../assets/image1.png"


const Landscape = () => {
  const products = [
    {
      id: 1,
      name: "Antigo Fence",
      price: "IT0,024.00 – IT4,984.82",
      hasButton: true,
      photo: photo,

    },
    {
      id: 2,
      name: "JF Australian Treills",
      price: "T6,952.00",
      hasButton: true,
      photo: photo,
    },
    {
      id: 3,
      name: "JF Polyhex Mesh",
      price: "F4,050.00 – IT0,770.00",
      hasButton: true,
      photo: photo,

    },
    {
      id: 4,
      name: "JF Privacy Grass Wall",
      price: "IT1,646.10 – IT8,284.10",
      hasButton: true,
      photo: photo,

    },
    {
      id: 5,
      name: "Product 5",
      price: "IT1,000.00 – IT2,000.00",
      hasButton: true,
      photo: photo,

    },
    {
      id: 6,
      name: "Product 6",
      price: "IT1,500.00",
      hasButton: true,
      photo: photo,

    },
    {
      id: 7,
      name: "Product 7",
      price: "IT2,000.00 – IT3,000.00",
      hasButton: true,
      photo: photo,

    },
    {
      id: 8,
      name: "Product 8",
      price: "IT2,500.00",
      hasButton: true,
      photo: photo,

    }
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
      <h1 className="text-3xl font-bold text-center mb-8">Landscape Products</h1>
      
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <img src={product.photo} alt="" />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                {product.hasButton && (
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors">
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
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <p className="text-center mt-12 text-gray-600">Trusted by over 6K+ customers</p>
    </div>
  );
};

export default Landscape;