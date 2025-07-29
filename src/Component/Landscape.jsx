import React, { useState, useEffect } from 'react';
import { BsArrowRightCircle } from "react-icons/bs";

const Landscape = () => {
  const products = [
    {
      id: 1,
      name: "JAntiqo Fence",
      price: "₹10,024.00 – ₹14,984.82",
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
      price: "₹4,050.00 – ₹10,770.00",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBeOSaD39hMGJeMqt9k-rBFYDkVjaRlXqEQ&s",
    },
    {
      id: 4,
      name: "JJF Privezy Grass Wall",
      price: "₹1,646.10 – ₹18,284.10",
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
      price: "₹499.00 – ₹1,589.00",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SxrkqrgJUYk4mDc-4gh-lP9ajySR-xEENQ&s",
    },
    {
      id: 31,
      name: "JF Polyhex Mesh",
      price: "₹4,050.00 – ₹10,770.00",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBeOSaD39hMGJeMqt9k-rBFYDkVjaRlXqEQ&s",
    },
    {
      id: 41,
      name: "JJF Privezy Grass Wall",
      price: "₹1,646.10 – ₹18,284.10",
      hasButton: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7C4kZ4j7sstt9IgOMayzVm4W0VZNf-2mI_A&s",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 768) {
        setCardsToShow(2);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const visibleProducts = products.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold py-4 sm:py-8 text-center sm:text-left">
        Landscape Products
      </h1>
      
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {visibleProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-[#F2F4F6] rounded-lg shadow-md p-1 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-3 flex flex-col h-full">
                <img 
                  className='rounded-3xl w-full h-48 sm:h-56 md:h-64 object-cover' 
                  src={product.photo} 
                  alt={product.name} 
                />
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold mt-3 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                </div>
                {product.hasButton && (
                  <button className="w-full bg-[#B0DD1D] text-black hover:bg-green-700 py-2 px-4 rounded-full transition-colors">
                    Shop Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons - hidden on mobile if showing all cards */}
        {windowWidth >= 640 || products.length > cardsToShow ? (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors hidden sm:block"
              aria-label="Previous products"
            >
              <BsArrowRightCircle className='text-3xl sm:text-4xl text-[#575656] rotate-180' />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors hidden sm:block"
              aria-label="Next products"
            >
              <BsArrowRightCircle className='text-3xl sm:text-4xl text-[#575656]' />
            </button>
          </>
        ) : null}
      </div>
      
      {/* Mobile navigation dots */}
      {windowWidth < 640 && products.length > cardsToShow && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(products.length / cardsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * cardsToShow)}
              className={`w-3 h-3 rounded-full ${currentIndex >= index * cardsToShow && currentIndex < (index + 1) * cardsToShow ? 'bg-[#B0DD1D]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Landscape;