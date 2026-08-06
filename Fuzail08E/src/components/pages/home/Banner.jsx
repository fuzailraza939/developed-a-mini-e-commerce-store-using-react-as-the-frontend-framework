// src/components/Banner.jsx

import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative h-[550px] overflow-hidden bg-[#1B3C53]">
      
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={`${img}?auto=format&fit=crop&w=1600&q=80`}
          alt="banner"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1B3C53]/70"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          
          {/* Small Tag */}
          <span className="inline-block px-5 py-2 mb-5 rounded-full border border-[#D2C1B6] text-[#D2C1B6] text-sm tracking-widest uppercase">
            Premium Collection
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Discover Luxury <br />
            <span className="text-[#E1AD01]">
              Fashion & Lifestyle
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#D2C1B6] text-lg md:text-xl mb-8 leading-relaxed">
            Explore premium quality products crafted for elegance,
            comfort, and modern style.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <button className="bg-[#E1AD01] hover:bg-[#d19f00] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:scale-105">
              Shop Now
            </button>

            <button className="border border-[#D2C1B6] text-[#D2C1B6] hover:bg-[#D2C1B6] hover:text-[#1B3C53] px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Explore More
            </button>

          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-[#E1AD01] scale-125"
                : "bg-white/50 hover:bg-[#D2C1B6]"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Banner;