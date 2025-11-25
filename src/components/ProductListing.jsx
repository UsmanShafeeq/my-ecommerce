// components/ProductListing.jsx
import React, { useState } from "react";

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
  const categories = ["All", "Electronics", "Fashion", "Home Appliances"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Filtering
  const filtered = products.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting
  const sorted = [...filtered].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  // Pagination
  const totalPages = Math.ceil(sorted.length / productsPerPage);
  const start = (currentPage - 1) * productsPerPage;
  const paginated = sorted.slice(start, start + productsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Categories</h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold transition text-left ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Search</h3>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          {/* Sorting */}
          <div className="flex justify-end mb-6">
            <select
              className="px-4 py-2 rounded-lg border"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginated.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="font-bold text-blue-600 text-lg">${product.price}</p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-3 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
