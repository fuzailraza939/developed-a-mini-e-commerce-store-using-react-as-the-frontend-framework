import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export default function Navbar({ title, count }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    setUser(stored);
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
    alert("Logout Successfully");
    navigate("/login");
  };
  

  const navLink =
    "relative text-white hover:text-[#D2C1B6] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#E1AD01] hover:after:w-full after:transition-all after:duration-300";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-[#1B3C53]/90 backdrop-blur-xl shadow-lg"
        : "bg-[#1B3C53]"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-white">
          {title}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-medium">
          <li><Link className={navLink} to="/">Home</Link></li>
          <li><Link className={navLink} to="/shop">Products</Link></li>
          <li><Link className={navLink} to="/about">About</Link></li>
          <li><Link className={navLink} to="/Contactus">ContactUs</Link></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5 text-white">

          {/* Social Icons */}
          <div className="hidden md:flex gap-3 text-sm text-[#D2C1B6]">
            <FaFacebookF className="hover:text-[#E1AD01] cursor-pointer transition" />
            <FaWhatsapp className="hover:text-[#E1AD01] cursor-pointer transition" />
            <FaInstagram className="hover:text-[#E1AD01] cursor-pointer transition" />
          </div>

        {/* Cart Icon */}
          <div className="relative">
            <FaShoppingCart className="text-lg cursor-pointer hover:text-[#E1AD01] transition" />
            <span className="absolute -top-2 -right-2 bg-[#E1AD01] text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center"> {count}
              </span>
            
          </div>
          {/* User Dropdown */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-md bg-yellow-400 px-4 py-2 font-semibold text-gray-800 hover:bg-yellow-500"
              >
                <span>Hello! {user.fullname}</span>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md border bg-white shadow-lg">
                  <button
                    onClick={logoutUser}
                    className="block w-full px-4 py-2 text-left text-cyan-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <FaUser className="text-lg cursor-pointer hover:text-[#E1AD01] transition" />
            </Link>
          )}

          {/* Mobile Login */}
          <Link to="/login" className="md:hidden">
            <div className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition">
              Login
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-xl"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#1B3C53]/95 backdrop-blur-xl px-6 pb-6">
          <div className="flex flex-col gap-4 font-medium">
            <Link className="text-white hover:text-[#E1AD01] transition py-2 border-b border-white/10" to="/">Home</Link>
            <Link className="text-white hover:text-[#E1AD01] transition py-2 border-b border-white/10" to="/shop">Products</Link>
            <Link className="text-white hover:text-[#E1AD01] transition py-2 border-b border-white/10" to="/about">About</Link>
            <Link className="text-white hover:text-[#E1AD01] transition py-2 border-b border-white/10" to="/login">Login</Link>
          </div>
        </div>
      )}
    </header>
  );
}