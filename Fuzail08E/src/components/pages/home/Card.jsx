// src/components/Card.jsx

const products = [
  { id: 1, title: "Premium Headphone", price: "$99", image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439" },
  { id: 2, title: "Luxury Watch", price: "$149", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
  { id: 3, title: "Modern Laptop", price: "$999", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
  { id: 4, title: "Professional Camera", price: "$499", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
];

const Card = () => {
  return (
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

              <button className="mt-5 w-full bg-[#E1AD01] text-black py-3 rounded-full font-semibold hover:tracking-wider transition">
                Add to Cart
              </button>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Card;