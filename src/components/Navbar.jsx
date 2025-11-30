import { Link } from "react-router-dom";
import { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Details", path: "/product-details" },
    { name: "Popular", path: "/popular-trending" },
    { name: "Cart", path: "/cart" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const categories = [
    "Electronics",
    "Fashion",
    "Home Appliances",
    "Beauty",
    "Sports",
    "Toys",
  ];

  const cartCount = 3;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-blue-600 hover:text-blue-500 transition duration-300"
        >
          MyShop
        </Link>

        {/* Search Bar (desktop only) */}
        <div className="hidden md:block w-1/4"> {/* Reduced width */}
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="flex items-center gap-1 font-semibold hover:text-blue-600 transition duration-300"
            >
              Categories <FiChevronDown className={`transition-transform ${categoryOpen ? "rotate-180" : ""}`} />
            </button>

            {categoryOpen && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg p-2 animate-fade-in">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/category/${cat.toLowerCase()}`}
                    className="block px-3 py-2 rounded-md hover:bg-blue-100 transition"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition duration-300 font-semibold ${
                link.name === "Dashboard" ? "bg-blue-600 text-white hover:bg-blue-700" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-2xl hover:text-blue-600 transition duration-300" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
              {cartCount}
            </span>
          </Link>

          {/* Login/User */}
          <Link
            to="/login"
            className="flex items-center gap-1 font-semibold hover:text-blue-600 transition duration-300"
          >
            <FiUser className="text-xl" /> Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg p-4 space-y-4 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="w-3/4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {/* Categories */}
        <div>
          <button
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="flex items-center gap-1 font-semibold mb-2 w-full justify-between"
          >
            Categories <FiChevronDown className={`transition-transform ${categoryOpen ? "rotate-180" : ""}`} />
          </button>

          {categoryOpen && (
            <div className="bg-gray-50 p-2 rounded-lg space-y-2">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  to={`/category/${cat.toLowerCase()}`}
                  className="block py-2 px-3 rounded-md hover:bg-blue-100 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {cat}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Nav Links */}
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`block py-2 px-3 rounded-md font-semibold transition ${
              link.name === "Dashboard"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "hover:bg-blue-100"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        {/* Cart + Login */}
        <div className="flex items-center justify-between pt-3 border-t">
          <Link to="/cart" className="flex items-center gap-2 text-lg">
            <FiShoppingCart /> Cart ({cartCount})
          </Link>

          <Link to="/login" className="flex items-center gap-1 text-lg">
            <FiUser /> Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
