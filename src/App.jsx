import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

function App() {
  console.log("App is working correctly!");
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route
          path="*"
          element={<div className="text-center p-12">Page Not Found</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
