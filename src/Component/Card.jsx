import React from 'react';

const ProductCard = ({ name, price, photo, hasButton }) => {
  return (
    <div className="flex-1 min-w-[250px] max-w-full md:w-auto bg-[#F2F4F6] rounded-lg shadow-md p-1 hover:shadow-lg transition-shadow">
      <div className="p-3">
        <img
          className="rounded-3xl md:h-64 h-34 w-full object-cover"
          src={photo}
          alt={name}
        />
        <h3 className="md:text-xl md:h-18 h-10 py-4 font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 pb-5">{price}</p>
        {hasButton && (
          <button className="bg-[#B0DD1D] text-black hover:bg-green-700 py-2 px-4 rounded-4xl transition-colors">
            Shop Now
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
