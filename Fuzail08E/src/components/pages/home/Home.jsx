

import { useEffect, useState } from "react";
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
];
const products = [
  { id: 1, title: "Premium Headphone", price: "$99", image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439" },
  { id: 2, title: "Luxury Watch", price: "$149", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
  { id: 3, title: "Modern Laptop", price: "$999", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
  { id: 4, title: "Professional Camera", price: "$499", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
];
const reviews = [
  { id: 1, name: "John Doe", review: "Amazing quality and fast shipping!" },
  { id: 2, name: "Sarah Smith", review: "Best shopping experience ever." },
  { id: 3, name: "Michael Lee", review: "Highly recommended products." },
];


const Home = (props) => {
    const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);
  return (
   <>
   
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
 <section className="py-24 bg-[#0f2230]">

      <div className="text-center mb-14">
        <p className="text-[#D2C1B6] tracking-[5px] uppercase text-sm">
          Exclusive Picks
        </p>

        <h2 className="text-5xl font-bold text-white mt-3">
          Featured Products
        </h2>

        <div className="w-24 h-[3px] bg-[#E1AD01] mx-auto mt-5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {products.map((p) => (
          <div
            key={p.id}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-500"
          >

            <div className="overflow-hidden">
              <img
                src={`${p.image}?auto=format&fit=crop&w=800&q=80`}
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <div className="p-6 text-center">

              <h3 className="text-white text-xl font-semibold">
                {p.title}
              </h3>

              <p className="text-[#E1AD01] text-2xl font-bold mt-2">
                {p.price}
              </p>

              <button className="mt-5 w-full bg-[#E1AD01] text-black py-3 rounded-full font-semibold hover:tracking-wider transitionon" onClick={() => props.setCount(props.count + 1)}>
                Add to Cart
              </button>

            </div>
          </div>
        ))}

      </div>
    </section>
<section className="py-24 bg-[#0f2230]">

      <div className="text-center mb-14">
        <p className="text-[#D2C1B6] uppercase tracking-[5px] text-sm">
          Testimonials
        </p>

        <h2 className="text-5xl font-bold text-white mt-3">
          What Clients Say
        </h2>

        <div className="w-24 h-[3px] bg-[#E1AD01] mx-auto mt-5 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition"
          >

            <p className="text-[#D2C1B6] text-lg italic leading-relaxed">
              “{r.review}”
            </p>

            <div className="mt-6">
              <h3 className="text-white font-semibold text-lg">
                {r.name}
              </h3>
              <div className="w-10 h-[2px] bg-[#E1AD01] mt-3"></div>
            </div>

          </div>
        ))}

      </div>
    </section>
   </>
  );
};

export default Home;