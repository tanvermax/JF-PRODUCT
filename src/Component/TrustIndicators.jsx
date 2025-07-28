import React from 'react';

const TrustIndicators = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
          Premium <span className="text-green-600">Products</span>
        </h2>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trusted by customers */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">6K+</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted by customers</h3>
            <p className="text-gray-600">Satisfied clients nationwide</p>
          </div>
          
          {/* Google Reviews */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">4000+</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Google Reviews</h3>
            <p className="text-gray-600">Rated 4.8/5 stars</p>
          </div>
          
          {/* Delivery coverage */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">All</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Across India</h3>
            <p className="text-gray-600">Fast & reliable delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;