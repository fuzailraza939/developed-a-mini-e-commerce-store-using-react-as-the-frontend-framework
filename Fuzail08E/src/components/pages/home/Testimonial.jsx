// src/components/Testimonial.jsx

const reviews = [
  { id: 1, name: "John Doe", review: "Amazing quality and fast shipping!" },
  { id: 2, name: "Sarah Smith", review: "Best shopping experience ever." },
  { id: 3, name: "Michael Lee", review: "Highly recommended products." },
];

const Testimonial = () => {
  return (
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
  );
};

export default Testimonial;