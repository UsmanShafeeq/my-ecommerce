import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="*" element={<div className="text-center p-12">Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
