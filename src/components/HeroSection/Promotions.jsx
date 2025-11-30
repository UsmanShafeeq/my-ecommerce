import React from "react";

const promotions = [
  { id: 1, title: "Free Shipping", description: "On orders over $50", icon: "🚚" },
  { id: 2, title: "Summer Sale", description: "Up to 30% off", icon: "🔥" },
  { id: 3, title: "New Arrivals", description: "Check latest products", icon: "🛍️" },
  { id: 4, title: "Cashback Offer", description: "Get 10% cashback", icon: "💰" },
];

export default function Promotions() {
  return (
    <section className="my-12 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
        Our Promotions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="relative flex flex-col items-center p-6 text-center rounded-xl bg-linear-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden group"
          >
            {/* Animated Floating Background Circle */}
            <div className="absolute -top-12 -left-12 w-36 h-36 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse-slow group-hover:opacity-40 transition duration-500"></div>

            {/* Icon with bounce animation on hover */}
            <span className="text-6xl mb-3 transition-transform duration-500 group-hover:-translate-y-2">
              {promo.icon}
            </span>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-600">
              {promo.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600">{promo.description}</p>

            {/* Animated underline */}
            <div className="mt-4 w-14 h-1 bg-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
