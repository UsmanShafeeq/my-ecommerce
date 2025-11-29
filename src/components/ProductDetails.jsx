import React, { useState } from 'react';

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  // Sample product details
  const product = {
    id: 1,
    name: "Premium Smartphone",
    category: "Electronics",
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
    description: "Experience cutting-edge technology with our premium smartphone. Features a stunning display, powerful processor, and exceptional camera quality.",
    features: [
      "6.7-inch AMOLED Display",
      "5G Connectivity",
      "Dual Camera System",
      "All-day Battery Life",
      "Water Resistant"
    ],
    inStock: true
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-white rounded-lg shadow">
            <img
              src={product.image}
              alt={product.name}
              className="h-96 w-full object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="text-yellow-400">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-blue-600">${product.price}</span>
                <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {product.discount}% OFF
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                product.inStock 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </span>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Quantity:</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 px-2 py-2 border rounded text-center"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
              >
                Add to Cart
              </button>
              <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 rounded-lg transition">
                Add to Wishlist
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                ✓ Free Shipping on orders over $50<br />
                ✓ 30-day money back guarantee<br />
                ✓ 1-year warranty included
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
