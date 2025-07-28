import React from 'react';

const WhyUsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Durability Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-green-600 mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Unmatched Durability with Corrosion-Free Technology</h3>
          <p className="text-gray-600">
            Our JF-270 barbed wire features a robust 270 SSM zinc coating ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.
          </p>
        </div>

        {/* Customer-Centric Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-green-600 mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer-Centric Approach</h3>
          <p className="text-gray-600">
            At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.
          </p>
        </div>

        {/* Product Range Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-green-600 mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovative and Diverse Product Range</h3>
          <p className="text-gray-600">
            We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trails, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-16">
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default WhyUsSection;