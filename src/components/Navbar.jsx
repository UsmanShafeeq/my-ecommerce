import { Link } from "react-router-dom";
import { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  // Main Nav Links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Cart", path: "/cart" },
  ];

  // Categories dropdown
  const categories = [
    "Electronics",
    "Fashion",
    "Home Appliances",
    "Beauty",
    "Sports",
    "Toys",
  ];

  const cartCount = 3; // ← use context later

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-blue-600 hover:text-blue-500 transition"
        >
          MyShop
        </Link>

        {/* Search Bar (desktop only) */}
        <div className="hidden md:block w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="flex items-center gap-1 font-semibold hover:text-blue-600"
            >
              Categories <FiChevronDown />
            </button>

            {categoryOpen && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/category/${cat.toLowerCase()}`}
                    className="block px-3 py-2 rounded-md hover:bg-blue-100"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Map Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition font-semibold"
            >
              {link.name}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-2xl hover:text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded">
              {cartCount}
            </span>
          </Link>

          {/* Login/User Button */}
          <Link
            to="/login"
            className="flex items-center gap-1 font-semibold hover:text-blue-600"
          >
            <FiUser className="text-xl" />
            Login
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
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4">

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-lg"
          />

          {/* Categories */}
          <div>
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="flex items-center gap-1 font-semibold mb-2"
            >
              Categories <FiChevronDown />
            </button>

            {categoryOpen && (
              <div className="bg-gray-50 p-2 rounded-lg space-y-2">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/category/${cat.toLowerCase()}`}
                    className="block py-2 px-3 rounded-md hover:bg-blue-100"
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
              className="block py-2 px-3 rounded-md font-semibold hover:bg-blue-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Cart + Login */}
          <div className="flex items-center justify-between pt-3 border-t">
            <Link to="/cart" className="flex items-center gap-2 text-lg">
              <FiShoppingCart />
              Cart ({cartCount})
            </Link>

            <Link to="/login" className="flex items-center gap-1 text-lg">
              <FiUser /> Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
