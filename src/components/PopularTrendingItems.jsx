import React, { useEffect } from "react";

// Sample Product Images
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

export default function PopularTrendingItems() {
  useEffect(() => {
    console.log("PopularTrendingItems mounted");
  }, []);

  const items = [
    {
      id: 1,
      title: "Portable Bluetooth Speaker",
      description: "High quality sound, portable, long battery life.",
      image: speaker,
      price: "$79",
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      description: "Track your fitness, heart rate, sleep, and more.",
      image: watch,
      price: "$129",
    },
    {
      id: 3,
      title: "Mini HD Projector",
      description: "Compact projector for home theater and presentations.",
      image: projector,
      price: "$99",
    },
    {
      id: 4,
      title: "Wireless Earbuds",
      description: "Comfortable fit with clear sound and noise cancellation.",
      image: earbuds,
      price: "$59",
    },
    {
      id: 5,
      title: "Gaming Headset",
      description: "Immersive sound for gaming and communication.",
      image: gamingHeadset,
      price: "$149",
    },
    {
      id: 6,
      title: "Mechanical Keyboard",
      description: "Responsive keys and RGB lighting for gamers.",
      image: keyboard,
      price: "$89",
    },
    {
      id: 7,
      title: "Wireless Gaming Mouse",
      description: "Ergonomic design with adjustable DPI settings.",
      image: mouse,
      price: "$49",
    },
    {
      id: 8,
      title: "Ultra Slim Laptop",
      description: "Portable and powerful for work and entertainment.",
      image: laptop,
      price: "$899",
    },
    {
      id: 9,
      title: "Professional DSLR Camera",
      description: "Capture high quality photos and videos.",
      image: camera,
      price: "$1299",
    },
    {
      id: 10,
      title: "Studio Microphone",
      description: "Perfect for recording vocals and instruments.",
      image: mic,
      price: "$199",
    },
  ];

  return (
    <div className="min-h-screen pt-10 bg-gray-50">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600">
          Popular Trending Items
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between transform transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full object-cover rounded-xl mb-3 shadow-sm hover:scale-105 transition-transform duration-300"
                />
                <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                <p className="text-xs text-gray-400 mt-1">More Info...</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-blue-600 text-lg">{item.price}</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition transform hover:scale-105">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
