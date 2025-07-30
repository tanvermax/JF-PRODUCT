import React, { useState, useEffect } from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import ProductCard from './Card';

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
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsToShow(1);
      } else if (width < 768) {
        setCardsToShow(2);
      } else if (width < 1024) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
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
    <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-12">
      <h1 className="md:text-3xl text-xl font-semibold py-8">Agricultural Products</h1>

      <div className="relative">
        {/* Cards Container */}
        <div className="flex flex-wrap md:flex-nowrap gap-6 overflow-hidden transition-all duration-300">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              photo={product.photo}
              hasButton={product.hasButton}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 hover:bg-gray-100 shadow"
        >
          <BsArrowRightCircle className="md:text-4xl text-2xl text-[#575656] rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 hover:bg-gray-100 shadow"
        >
          <BsArrowRightCircle className="md:text-4xl text-2xl text-[#575656]" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
