import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider";
import DealsOfTheDay from "./DealsOfTheDay";
import Promotions from "./Promotions";

const HeroSection = () => {
  return (
    <section className="w-full">
      {/* Hero Slider */}
      <HeroSlider />
      {/* Promotions */}
      <Promotions />

      {/* Deals of the Day */}
      <DealsOfTheDay />

      {/* Featured Product Section */}
      <div className="my-12 px-4 md:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Product</h2>
        <div className="max-w-4xl mx-auto bg-linear-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            {/* Featured Product Image */}
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80"
                alt="Premium Smartphone"
                className="h-64 w-full object-cover rounded-lg shadow-md hover:shadow-lg transition"
              />
            </div>

            {/* Featured Product Info */}
            <div className="flex flex-col justify-center">
              <span className="text-sm font-semibold text-blue-600 mb-2">FEATURED PRODUCT</span>
              <h3 className="text-3xl font-bold text-gray-800 mb-3">Premium Smartphone</h3>
              
              <p className="text-gray-600 mb-4">
                Experience cutting-edge technology with our premium smartphone. Features a stunning display, powerful processor, and exceptional camera quality.
              </p>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-blue-600">$299.99</span>
                <span className="text-lg text-gray-400 line-through">$399.99</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">25% OFF</span>
              </div>

              <div className="flex items-center mb-4 text-yellow-400">
                {"★".repeat(4)}☆ <span className="text-gray-600 ml-2">(128 reviews)</span>
              </div>

              <Link
                to="/product-details"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 text-center"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
