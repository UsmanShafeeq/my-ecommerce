import React, { useState } from "react";

// Main Product Image
import imgheadphones from "../assets/ProductDetails/headphones.jpg";

// Related Product Images (20 items)
import speaker from "../assets/ProductDetails/speaker.jpg";
import watch from "../assets/ProductDetails/watch.jpg";
import projector from "../assets/ProductDetails/projector.jpg";
import earbuds from "../assets/ProductDetails/earbuds.jpg";
import gamingHeadset from "../assets/ProductDetails/gaming-headset.jpg";
import keyboard from "../assets/ProductDetails/keyboard.jpg";
import mouse from "../assets/ProductDetails/mouse.jpg";
import laptop from "../assets/ProductDetails/laptop.jpg";
import camera from "../assets/ProductDetails/camera.jpg";
import mic from "../assets/ProductDetails/mic.jpg";
import drone from "../assets/ProductDetails/drone.jpg";
import tablet from "../assets/ProductDetails/tablet.jpg";
import tv from "../assets/ProductDetails/tv.jpg";
import speaker2 from "../assets/ProductDetails/speaker.jpg";
import smartwatch2 from "../assets/ProductDetails/smartwatch.jpg";
import vr from "../assets/ProductDetails/vr.jpg";
import charger from "../assets/ProductDetails/charger.jpg";
import powerbank from "../assets/ProductDetails/powerbank.jpg";
import router from "../assets/ProductDetails/router.jpg";
import tripod from "../assets/ProductDetails/tripod.jpg";

export default function ProductDetails() {
  const [cartCount, setCartCount] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const product = {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    description:
      "Experience premium audio clarity, deep bass, and active noise cancellation with a comfortable design perfect for long listening sessions. Up to 30 hours of battery backup.",
    price: 199,
    rating: 4.8,
    image: imgheadphones,
    reviews: [
      { id: 1, user: "John Doe", rating: 5, comment: "Amazing sound quality!" },
      { id: 2, user: "Jane Smith", rating: 4, comment: "Very comfortable!" },
      { id: 3, user: "Ali Khan", rating: 5, comment: "Highly recommend!" },
    ],
    relatedProducts: [
      { id: 2, title: "Portable Bluetooth Speaker", price: 79, image: speaker },
      { id: 3, title: "Smart Fitness Watch", price: 129, image: watch },
      { id: 4, title: "Wireless Earbuds", price: 59, image: earbuds },
      { id: 5, title: "Gaming Headset", price: 149, image: gamingHeadset },
      { id: 6, title: "Mini HD Projector", price: 99, image: projector },
      { id: 7, title: "Mechanical Keyboard", price: 89, image: keyboard },
      { id: 8, title: "Wireless Gaming Mouse", price: 49, image: mouse },
      { id: 9, title: "Ultra Slim Laptop", price: 899, image: laptop },
      { id: 10, title: "Professional DSLR Camera", price: 1299, image: camera },
      { id: 11, title: "Studio Microphone", price: 199, image: mic },
      { id: 12, title: "4K Camera Drone", price: 699, image: drone },
      { id: 13, title: "10-inch Tablet", price: 239, image: tablet },
      { id: 14, title: "Smart LED TV", price: 499, image: tv },
      { id: 15, title: "Bass Boost Speaker", price: 119, image: speaker2 },
      { id: 16, title: "Advanced Smartwatch", price: 159, image: smartwatch2 },
      { id: 17, title: "Virtual Reality Headset", price: 299, image: vr },
      { id: 18, title: "Fast Charging Adapter", price: 29, image: charger },
      { id: 19, title: "Power Bank 20000mAh", price: 39, image: powerbank },
      { id: 20, title: "WiFi 6 Router", price: 89, image: router },
      { id: 21, title: "Camera Tripod Stand", price: 45, image: tripod },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Heading */}
        <div className="text-center mb-16">
          <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            New Arrival
          </span>
          <h1 className="text-5xl font-extrabold text-blue-600 mt-4 drop-shadow">
            Product Details
          </h1>
          <p className="text-lg text-gray-700 mt-3 max-w-2xl mx-auto">
            Explore your favorite products with premium quality and excellent performance.
          </p>
        </div>

        {/* Product Section */}
        <div className="flex flex-col md:flex-row gap-10 bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-200">

          {/* Image with Zoom */}
          <div className="md:w-1/2 cursor-zoom-in">
            <img
              src={product.image}
              alt={product.title}
              onClick={() => setZoomed(!zoomed)}
              className={`w-full h-[400px] rounded-2xl object-cover shadow-xl transition-transform duration-300 ${
                zoomed ? "scale-125" : "scale-100"
              }`}
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Click image to {zoomed ? "zoom out" : "zoom in"}
            </p>
          </div>

          {/* Product Information */}
          <div className="md:w-1/2 flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">{product.title}</h2>

              <div className="flex items-center mt-3">
                <span className="text-yellow-500 text-xl">⭐</span>
                <p className="ml-2 text-gray-700 font-medium">
                  {product.rating} / 5.0
                </p>
              </div>

              <p className="text-gray-700 mt-4 leading-relaxed text-lg">
                {product.description}
              </p>

              <p className="text-4xl font-bold text-blue-600 mt-6">
                ${product.price}
              </p>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white py-3 px-8 rounded-xl text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition shadow-xl"
            >
              Add to Cart ({cartCount})
            </button>

            {/* Benefits */}
            <div className="border-t pt-5 text-sm text-gray-700 space-y-1">
              <p>✓ Free Shipping on orders over $50</p>
              <p>✓ 30-Day Money Back Guarantee</p>
              <p>✓ 1-Year Official Warranty</p>
              <p>✓ 24/7 Customer Support</p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Customer Reviews</h2>

          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="bg-white p-4 rounded-xl shadow">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{review.user}</p>
                  <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {product.relatedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white/90 border p-4 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-xl shadow"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-blue-600 font-bold text-lg mt-1">
                  ${item.price}
                </p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
