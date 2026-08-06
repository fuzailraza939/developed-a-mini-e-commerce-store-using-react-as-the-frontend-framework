import React from "react";

export default function Checkout() {
  const product = {
    name: "Taurus FIRE For Unisex",
    size: "30ml",
    price: 1290,
    qty: 1,
    image: "https://via.placeholder.com/100",
  };

  const shipping = 300;
  const subtotal = product.price * product.qty;
  const total = subtotal + shipping;

const user = JSON.parse(localStorage.getItem("user"))

if(!user){
  return <Navigate to = "/shop"/>
}

  return (
    <div className="min-h-screen bg-[#1B3C53] pt-20 text-white">

      {/* Hero */}
      <div className="bg-[#244B66] border-b border-white/10">
        <div className="max-w-7xl mx-auto py-10 text-center">
          <h1 className="text-4xl font-bold tracking-wide">
            ORDER SUMMARY
          </h1>
          <p className="mt-2 text-white/70">
            Complete your purchase securely
          </p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-5 py-10 grid lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 bg-[#244B66] rounded-3xl shadow-xl p-8">

          {/* Contact */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-5">
              Contact Information
            </h2>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl bg-white text-black p-4 outline-none focus:ring-2 focus:ring-[#E1AD01]"
            />
          </div>


          {/* Delivery */}
          <div className="mb-10">

            <h2 className="text-xl font-bold mb-5">
              Delivery Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                placeholder="First Name"
                className="rounded-xl bg-white text-black p-4 outline-none focus:ring-2 focus:ring-[#E1AD01]"
              />

              <input
                placeholder="Last Name"
                className="rounded-xl bg-white text-black p-4 outline-none focus:ring-2 focus:ring-[#E1AD01]"
              />

            </div>


            <select className="w-full mt-5 rounded-xl bg-white text-black p-4 outline-none focus:ring-2 focus:ring-[#E1AD01]">
              <option>Pakistan</option>
            </select>


            <input
              placeholder="City"
              className="w-full mt-5 rounded-xl bg-white text-black p-4 outline-none focus:ring-2 focus:ring-[#E1AD01]"
            />

          </div>



          {/* Shipping */}
          <div className="mb-10">

            <h2 className="text-xl font-bold mb-5">
              Shipping Method
            </h2>


            <div className="rounded-2xl border-2 border-[#E1AD01] bg-[#1B3C53] p-5 flex justify-between items-center">

              <div>
                <p className="font-semibold">
                  Standard Shipping
                </p>

                <p className="text-sm text-white/60">
                  Delivery within 3-5 working days
                </p>
              </div>


              <span className="text-lg font-bold text-[#E1AD01]">
                Rs. {shipping}
              </span>

            </div>

          </div>



          {/* Payment */}
          <div className="mb-10">

            <h2 className="text-xl font-bold mb-5">
              Payment Method
            </h2>


            <label className="flex items-center gap-4 border-2 border-[#E1AD01] bg-[#1B3C53] rounded-2xl p-5 cursor-pointer">

              <input
                type="radio"
                checked
                readOnly
                className="h-5 w-5 accent-[#E1AD01]"
              />

              <div>
                <p className="font-semibold">
                  Cash On Delivery
                </p>

                <p className="text-sm text-white/60">
                  Pay when your order arrives.
                </p>
              </div>

            </label>

          </div>



          <button
            className="w-full bg-[#E1AD01] hover:bg-yellow-500 text-black py-4 rounded-xl text-lg font-bold transition-all duration-300"
          >
            Complete Order
          </button>

        </div>



        {/* RIGHT */}
        <div className="bg-[#244B66] rounded-3xl shadow-xl p-8 sticky top-24 h-fit">

          <h2 className="text-2xl font-bold mb-8">
            Order Summary
          </h2>


          <div className="flex gap-4 border-b border-white/20 pb-6">

            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 rounded-xl object-cover bg-white"
            />


            <div className="flex-1">

              <h3 className="font-semibold text-lg">
                {product.name}
              </h3>

              <p className="text-white/60">
                {product.size}
              </p>


              <div className="mt-2 flex justify-between">

                <span>
                  Qty: {product.qty}
                </span>

                <span className="font-bold text-[#E1AD01]">
                  Rs. {product.price}
                </span>

              </div>

            </div>

          </div>



          <div className="mt-6 space-y-3">


            <div className="flex justify-between text-white/70">
              <span>Subtotal</span>
              <span>Rs. {subtotal}</span>
            </div>


            <div className="flex justify-between text-white/70">
              <span>Shipping</span>
              <span>Rs. {shipping}</span>
            </div>



            <div className="flex justify-between text-lg font-bold border-t border-white/20 pt-3">

              <span>
                Total
              </span>

              <span className="text-[#E1AD01]">
                Rs. {total}
              </span>

            </div>


          </div>

        </div>

      </div>

    </div>
  );
}