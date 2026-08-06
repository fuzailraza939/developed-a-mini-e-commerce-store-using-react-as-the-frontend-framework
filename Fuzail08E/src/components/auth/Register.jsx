import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  FaUser,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaApple,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Already logged in? no need to register again.
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser) {
    return <Navigate to="/shop" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    const user = { fullname, email, password };

    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        user
      );

      await Swal.fire({
        title: "Account Created!",
        text: response.data.message || "You can now log in to your account.",
        icon: "success",
        timer: 1800,
        showConfirmButton: false,
      });

      setFullname("");
      setEmail("");
      setPassword("");

      navigate("/login");
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Something went wrong while creating your account. Please try again.";

      Swal.fire({
        title: "Registration Failed",
        text: message,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 items-center justify-center p-12">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 max-w-lg text-white shadow-2xl">
          <h1 className="text-5xl font-bold mb-6">Zenvy</h1>

          <p className="text-lg leading-8 text-blue-100">
            Discover premium products with a modern shopping experience.
            Secure payments, fast delivery, and thousands of satisfied
            customers around the world.
          </p>

          <div className="mt-10">
            <img
              src="https://illustrations.popsy.co/white/shopping.svg"
              alt="Shopping"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>

          <p className="text-gray-500 mt-2 mb-8">
            Register your account and start shopping.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <label className="text-sm font-semibold text-gray-600">
              Full Name
            </label>

            <div className="flex items-center mt-2 mb-5 border rounded-xl px-4 focus-within:ring-2 focus-within:ring-indigo-500 transition">
              <FaUser className="text-gray-400" />

              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 outline-none"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <label className="text-sm font-semibold text-gray-600">
              Email Address
            </label>

            <div className="flex items-center mt-2 mb-5 border rounded-xl px-4 focus-within:ring-2 focus-within:ring-indigo-500 transition">
              <MdEmail className="text-gray-400 text-lg" />

              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-3 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <label className="text-sm font-semibold text-gray-600">
              Password
            </label>

            <div className="flex items-center mt-2 mb-6 border rounded-xl px-4 focus-within:ring-2 focus-within:ring-indigo-500 transition">
              <FaLock className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full p-3 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-gray-400 hover:text-gray-600"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
            >
              {loading && (
                <span className="h-4 w-4 border-2 border-white/60 border-t-white rounded-full animate-spin" />
              )}
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Social Buttons */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t"></div>

            <span className="mx-4 text-sm text-gray-400">
              OR CONTINUE WITH
            </span>

            <div className="flex-1 border-t"></div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button
              type="button"
              className="border rounded-xl py-3 hover:bg-gray-50 transition"
            >
              <FaGoogle className="text-red-500 mx-auto text-xl" />
            </button>

            <button
              type="button"
              className="border rounded-xl py-3 hover:bg-gray-50 transition"
            >
              <FaFacebookF className="text-blue-600 mx-auto text-xl" />
            </button>

            <button
              type="button"
              className="border rounded-xl py-3 hover:bg-gray-50 transition"
            >
              <FaApple className="mx-auto text-xl" />
            </button>
          </div>

          <p className="text-center text-gray-500 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
