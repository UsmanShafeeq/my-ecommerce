// components/Products.jsx
import React from "react";

// Local product images
import speaker from "../assets/ProductDetails/speaker.jpg";
import watch from "../assets/ProductDetails/watch.jpg";
import projector from "../assets/ProductDetails/projector.jpg";
import earbuds from "../assets/ProductDetails/earbuds.jpg";
import gamingHeadset from "../assets/ProductDetails/gaming-headset.jpg";
import keyboard from "../assets/ProductDetails/keyboard.jpg";
import mouse from "../assets/ProductDetails/mouse.jpg";
import laptop from "../assets/ProductDetails/laptop.jpg";
import camera from "../assets/ProductDetails/camera.jpg";
import mic from "../assets/ProductDetails/mic.jpg";
import drone from "../assets/ProductDetails/drone.jpg";
import tablet from "../assets/ProductDetails/tablet.jpg";
import tv from "../assets/ProductDetails/tv.jpg";
import speaker2 from "../assets/ProductDetails/speaker.jpg";
import smartwatch2 from "../assets/ProductDetails/smartwatch.jpg";
import vr from "../assets/ProductDetails/vr.jpg";
import charger from "../assets/ProductDetails/charger.jpg";
import powerbank from "../assets/ProductDetails/powerbank.jpg";
import router from "../assets/ProductDetails/router.jpg";
import tripod from "../assets/ProductDetails/tripod.jpg";

const products = [
  { id: 1, name: "Portable Bluetooth Speaker", category: "Electronics", price: 79, image: speaker, description: "High quality sound, portable, long battery life." },
  { id: 2, name: "Smart Fitness Watch", category: "Electronics", price: 129, image: watch, description: "Track your fitness, heart rate, sleep, and more." },
  { id: 3, name: "Mini HD Projector", category: "Electronics", price: 99, image: projector, description: "Compact projector for home theater and presentations." },
  { id: 4, name: "Wireless Earbuds", category: "Electronics", price: 59, image: earbuds, description: "Comfortable fit with clear sound and noise cancellation." },
  { id: 5, name: "Gaming Headset", category: "Electronics", price: 149, image: gamingHeadset, description: "Immersive sound for gaming and communication." },
  { id: 6, name: "Mechanical Keyboard", category: "Electronics", price: 89, image: keyboard, description: "Responsive keys and RGB lighting for gamers." },
  { id: 7, name: "Wireless Gaming Mouse", category: "Electronics", price: 49, image: mouse, description: "Ergonomic design with adjustable DPI settings." },
  { id: 8, name: "Ultra Slim Laptop", category: "Electronics", price: 899, image: laptop, description: "Portable and powerful for work and entertainment." },
  { id: 9, name: "Professional DSLR Camera", category: "Electronics", price: 1299, image: camera, description: "Capture high quality photos and videos." },
  { id: 10, name: "Studio Microphone", category: "Electronics", price: 199, image: mic, description: "Perfect for recording vocals and instruments." },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600">
            Our Products
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our collection of premium gadgets and accessories, designed to bring innovation and style to your everyday life.
          </p>
          <div className="mt-3 flex justify-center">
            <span className="w-20 h-1 bg-blue-500 rounded-full animate-pulse"></span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 group cursor-pointer"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-500">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-200 text-sm mb-1">{product.description}</p>
                <p className="text-blue-400 font-bold mb-2">{product.category}</p>
                <p className="text-blue-400 font-extrabold text-2xl mb-4">${product.price}</p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>

              {/* Product Info at bottom */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-blue-600 font-bold text-lg">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
