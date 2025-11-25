import React from "react";
import HeroSlider from "./HeroSlider";
import DealsOfTheDay from "./DealsOfTheDay";
import Promotions from "./Promotions";

const HeroSection = () => {
  return (
    <section className="w-full">
      {/* Hero Slider */}
      <HeroSlider />
      {/* Promotions */}
      <Promotions />

      {/* Deals of the Day */}
      <DealsOfTheDay />

      
    </section>
  );
};

export default HeroSection;
