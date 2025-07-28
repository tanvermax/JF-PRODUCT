import React, { useState } from 'react';

const GrassWallSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "JF Privacy Grass Wall",
      subtitle: "The Perfect Blend Of Greenery",
      buttonText: "Shop Now",
      features: [
        "Durable synthetic material",
        "Weather resistant",
        "Low maintenance"
      ]
    },
    {
      title: "Natural Looking Privacy",
      subtitle: "Create Your Private Oasis",
      buttonText: "View Options",
      features: [
        "Realistic grass appearance",
        "Blocks unwanted views",
        "No watering needed"
      ]
    },
    {
      title: "Easy Installation",
      subtitle: "Quick Setup For Any Space",
      buttonText: "Learn More",
      features: [
        "Modular design",
        "DIY friendly",
        "Multiple mounting options"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Slider container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="w-full flex-shrink-0 bg-gradient-to-br from-green-700 to-green-900 text-white p-8 md:p-12"
          >
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-6">{slide.subtitle}</p>
              
              <button className="bg-white text-green-800 font-semibold py-2 px-6 rounded-full hover:bg-green-100 transition-colors mb-8">
                {slide.buttonText}
              </button>
              
              <div className="border-t border-green-600 pt-6">
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <ul className="space-y-2">
                  {slide.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GrassWallSlider;