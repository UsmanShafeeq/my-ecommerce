import React from "react";

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Verified Buyer",
      rating: 5,
      comment:
        "Outstanding quality and fast shipping! The product exceeded my expectations. Highly recommended!",
      product: "Premium Headphones",
    },
    {
      id: 2,
      name: "Mike Chen",
      title: "Verified Buyer",
      rating: 5,
      comment:
        "Great customer service and excellent product quality. Will definitely shop here again.",
      product: "Wireless Charger",
    },
    {
      id: 3,
      name: "Emma Davis",
      title: "Verified Buyer",
      rating: 4,
      comment:
        "Good value for money. Product arrived in perfect condition with professional packaging.",
      product: "Smart Watch",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-3">
            Customer Reviews
          </h2>
          <p className="text-gray-600 text-lg">
            See what our satisfied customers have to say
          </p>
          <div className="mt-2 inline-block">
            <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span className="text-gray-600 ml-3">(2,847 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-600"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.title}</p>
                </div>
              </div>

              <div className="text-yellow-400 mb-3">
                {"★".repeat(review.rating)}
              </div>

              <p className="text-gray-700 mb-4">"{review.comment}"</p>

              <p className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded inline-block font-semibold">
                {review.product}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
            View All Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
