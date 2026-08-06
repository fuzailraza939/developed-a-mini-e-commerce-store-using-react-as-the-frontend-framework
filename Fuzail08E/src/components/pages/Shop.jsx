import React, { useEffect, useState } from "react";

export default function ProductPage(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();

        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#1B3C53] text-white">

      {/* Banner */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop"
          alt="banner"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Luxury Collection
          </h1>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold mb-10">Featured Products</h2>

        {/* ERROR STATE */}
        {error && (
          <p className="text-red-400 text-center text-xl mb-6">
            {error}
          </p>
        )}

        {/* LOADING STATE */}
        {loading ? (
          <p className="text-center text-xl">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((item) => (
              <div
                key={item.id}
                className="bg-[#244b66] rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
              >

                {/* IMAGE FIX */}
                <div className="overflow-hidden bg-white flex items-center justify-center h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain p-4"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-[#E1AD01] text-xl font-bold mb-4">
                    ${item.price}
                  </p>

                  <button className="w-full bg-[#E1AD01] text-[#1B3C53] py-3 rounded-xl font-semibold" onClick={() => props.setCount(props.count + 1)}>
                    Add To Cart
                  </button>
                </div>

              </div>
            ))}

          </div>
        )}

      </section>
    </div>
  );
}