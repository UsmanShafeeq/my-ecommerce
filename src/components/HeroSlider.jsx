import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "https://source.unsplash.com/1600x600/?electronics",
    title: "Latest Electronics",
    subtitle: "Upgrade your tech today",
    buttonText: "Shop Now",
    buttonLink: "/products",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/1600x600/?fashion",
    title: "Trendy Fashion",
    subtitle: "New arrivals in 2025",
    buttonText: "Shop Now",
    buttonLink: "/products",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/1600x600/?home-appliances",
    title: "Smart Home Appliances",
    subtitle: "Make your life easier",
    buttonText: "Shop Now",
    buttonLink: "/products",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start px-6 md:px-20 text-white">
            <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
            <p className="mt-2 md:mt-4 text-lg md:text-2xl">{slide.subtitle}</p>
            <Link
              to={slide.buttonLink}
              className="mt-4 md:mt-6 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-semibold transition"
            >
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}

      {/* Dots / Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-blue-600" : "bg-white/50"
            }`}
            onClick={() => setCurrent(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
}
