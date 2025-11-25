import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
    title: "Latest Electronics",
    subtitle: "Upgrade your tech today",
    buttonText: "Shop Now",
    buttonLink: "/products",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=500&q=80",
    title: "Trendy Fashion",
    subtitle: "New arrivals in 2025",
    buttonText: "Shop Now",
    buttonLink: "/products",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
    title: "Smart Home Appliances",
    subtitle: "Make your life easier",
    buttonText: "Shop Now",
    buttonLink: "/products",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

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
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-start px-6 md:px-20 text-white">
            <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="mt-2 md:mt-4 text-lg md:text-2xl drop-shadow-md">
              {slide.subtitle}
            </p>
            <Link
              to={slide.buttonLink}
              className="mt-4 md:mt-6 bg-blue-600 hover:bg-blue-500 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full transition-colors ${
              idx === current ? "bg-blue-600" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrent(idx)}
          ></button>
        ))}
      </div>

      {/* Previous/Next Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition z-20"
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition z-20"
        onClick={() => setCurrent((current + 1) % slides.length)}
      >
        &#10095;
      </button>
    </div>
  );
}
