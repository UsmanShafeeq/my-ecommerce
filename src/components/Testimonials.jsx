// components/Testimonials.jsx
import React from "react";

// Sample testimonial images (replace with your local assets if needed)
import user1 from "../../assets/Testimonials/boy.png";
import user2 from "../../assets/Testimonials/boy.png";
import user3 from "../../assets/Testimonials/boy.png";


export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Tech Enthusiast",
      image: user1,
      rating: 5,
      comment: "Amazing products! Excellent quality and fast delivery. Highly recommend to everyone.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Fitness Lover",
      image: user2,
      rating: 4,
      comment: "The customer service was great, and the products exceeded my expectations.",
    },
    {
      id: 3,
      name: "Ali Khan",
      role: "Photographer",
      image: user3,
      rating: 5,
      comment: "High-quality products with premium feel. I love the attention to detail in every item.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-blue-600">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our satisfied customers and their experiences with our products.
          </p>
          <div className="mt-3 flex justify-center">
            <span className="w-20 h-1 bg-blue-500 rounded-full animate-pulse"></span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between transition-transform transform hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-4 bg-blue-500 text-white p-2 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6h13v13H9zM4 19V6h3v13H4z" />
                </svg>
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-base mt-4 mb-6">{item.comment}</p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover shadow-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                  <div className="flex mt-1 text-yellow-400">
                    {"⭐".repeat(item.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
