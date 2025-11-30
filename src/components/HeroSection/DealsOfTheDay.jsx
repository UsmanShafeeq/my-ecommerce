// src/components/HeroSection/DealsOfTheDay.jsx
import React from "react";

const deals = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Gaming Chair",
    price: 199.99,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Laptop",
    price: 899.99,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
  },
];

export default function DealsOfTheDay() {
  return (
    <div className="my-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Deals of the Day</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {deals.map((deal) => {
          const discountedPrice = (deal.price * (100 - deal.discount)) / 100;
          return (
            <div
              key={deal.id}
              className="relative border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 bg-white"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
                {deal.discount}% OFF
              </div>

              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg mb-2">{deal.name}</h3>
                <p className="text-blue-600 font-bold text-lg">
                  ${discountedPrice.toFixed(2)}{" "}
                  <span className="line-through text-gray-400 text-sm">
                    ${deal.price.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
