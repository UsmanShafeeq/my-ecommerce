// components/Trust.jsx
import React from "react";

export default function Trust() {
  const trustItems = [
    { id: 1, name: "Certified Quality", logo: "https://via.placeholder.com/100x60?text=Quality" },
    { id: 2, name: "Fast Delivery", logo: "https://via.placeholder.com/100x60?text=Delivery" },
    { id: 3, name: "Secure Payments", logo: "https://via.placeholder.com/100x60?text=Payment" },
    { id: 4, name: "24/7 Support", logo: "https://via.placeholder.com/100x60?text=Support" },
    { id: 5, name: "Trusted Brand", logo: "https://via.placeholder.com/100x60?text=Brand" },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Trusted by Customers Worldwide
        </h2>
        <p className="text-gray-600 mb-12">
          We provide premium quality products and services that you can trust.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {trustItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex items-center justify-center"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}