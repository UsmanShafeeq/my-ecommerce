// components/ProductListing.jsx
import React from "react";

// Sample product data with real images
const products = [
  { id: 1, name: "Smartphone", category: "Electronics", price: 299, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80" },
  { id: 2, name: "Laptop", category: "Electronics", price: 799, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80" },
  { id: 3, name: "T-Shirt", category: "Fashion", price: 25, image: "https://images.unsplash.com/photo-1585386959984-a415522e3309?auto=format&fit=crop&w=500&q=80" },
  { id: 4, name: "Blender", category: "Home Appliances", price: 60, image: "https://images.unsplash.com/photo-1606813909704-bd5e3e983b0a?auto=format&fit=crop&w=500&q=80" },
  { id: 5, name: "Sneakers", category: "Fashion", price: 75, image: "https://images.unsplash.com/photo-1528701800487-1b2f6d7e7d27?auto=format&fit=crop&w=500&q=80" },
  { id: 6, name: "Headphones", category: "Electronics", price: 120, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=500&q=80" },
  { id: 7, name: "Microwave", category: "Home Appliances", price: 150, image: "https://images.unsplash.com/photo-1612137820672-4ec6c3f30861?auto=format&fit=crop&w=500&q=80" },
  { id: 8, name: "Jacket", category: "Fashion", price: 100, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=80" },
  { id: 9, name: "Camera", category: "Electronics", price: 450, image: "https://images.unsplash.com/photo-1519183071298-a2962eade0c9?auto=format&fit=crop&w=500&q=80" },
  { id: 10, name: "Coffee Maker", category: "Home Appliances", price: 80, image: "https://images.unsplash.com/photo-1601042477471-8f5c71172ed7?auto=format&fit=crop&w=500&q=80" },
];

export default function ProductListing() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded mb-3"
              />
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-gray-600 mb-2 text-sm">{product.category}</p>
              <p className="font-bold text-blue-600 text-lg mb-3">${product.price}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
