import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* About Company */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-600">About Company</h3>
          <p className="text-gray-400 leading-relaxed">
            We are a leading e-commerce platform dedicated to providing high-quality products and an exceptional shopping experience to customers worldwide.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-600">Contact Info</h3>
          <p className="text-gray-400">123 Main Street, City, Country</p>
          <p className="text-gray-400">Email: info@company.com</p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-600">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Products</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Contact</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Blog</a></li>
          </ul>
        </div>

        {/* Newsletter & Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-600">Newsletter</h3>
          <p className="text-gray-400 mb-3">Subscribe to get the latest updates and offers.</p>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-lg text-white hover:bg-blue-700 transition font-semibold">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 pt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a>
              <a href="#" className="hover:text-blue-400 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
