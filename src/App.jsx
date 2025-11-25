import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSlider />
    </Router>
  );
}

export default App;
