import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-t-3xl pt-10 px-6 md:px-16 pb-4">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Newsletter */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold">Join Our JF Products</h2>
          <p className="text-gray-300 mt-2 text-sm">
            We’ll tell you about store updates and discounts
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-4 w-full bg-blue-700/40 px-4 py-2 rounded-md placeholder-white focus:outline-none"
          />
          <div className="flex items-center mt-3">
            <input type="checkbox" id="subscribe" className="mr-2" />
            <label htmlFor="subscribe" className="text-sm text-gray-300">
              Yes, subscribe me to your newsletter.
            </label>
          </div>
          <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
            Join Now
          </button>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-bold text-lg mb-3">Information</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>Shop</li>
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Helpful */}
        <div>
          <h3 className="font-bold text-lg mb-3">Helpful</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>My Account</li>
          </ul>
        </div>

        {/* Logo and Branches */}
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/Jqnpn4g/jf-logo.png"
              alt="JF Logo"
              className="w-16 h-16 object-contain"
            />
            <div>
              <p className="font-semibold text-sm">Our Branches</p>
              <p className="text-gray-300 text-sm">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>
          <button className="mt-6 bg-lime-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-500 w-fit">
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-500 pt-4 text-center text-sm text-gray-300">
        <p>Copyright © 2025 JF Products. All rights reserved</p>
        <div className="flex justify-center mt-3 space-x-4">
          <a href="#" className="bg-white text-black p-2 rounded-full">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-white text-black p-2 rounded-full">
            <FaInstagram />
          </a>
          <a href="#" className="bg-white text-black p-2 rounded-full">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
