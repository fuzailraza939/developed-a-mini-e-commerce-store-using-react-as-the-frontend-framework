import React from "react";

const Footer = () => {
  return (
    <footer className="text-center lg:text-left bg-[rgb(243,244,246)] text-[rgb(27,60,83)]">
      {/* Social Section */}
      <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-3 lg:gap-0 p-4 border-b border-gray-300">
        <div className="hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-[rgb(210,193,182)] transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-[rgb(210,193,182)] transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-[rgb(210,193,182)] transition">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-[rgb(210,193,182)] transition">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      {/* Footer Links */}
      <section>
        <div className="max-w-7xl mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            {/* Company */}
            <div>
              <h6 className="uppercase font-bold mb-4">Zenvy</h6>
              <p>
                Premium men's clothing brand offering stylish, modern, and
                comfortable outfits for every occasion.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h6 className="uppercase font-bold mb-4">Categories</h6>
              <p>
                <a href="/shirts" className="hover:text-yellow-600">
                  Shirts
                </a>
              </p>
              <p>
                <a href="/pants" className="hover:text-yellow-600">
                  Pants
                </a>
              </p>
              <p>
                <a href="/accessories" className="hover:text-yellow-600">
                  Accessories
                </a>
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h6 className="uppercase font-bold mb-4">Useful Links</h6>
              <p>
                <a href="/pricing" className="hover:text-yellow-600">
                  Pricing
                </a>
              </p>
              <p>
                <a href="/orders" className="hover:text-yellow-600">
                  Orders
                </a>
              </p>
              <p>
                <a href="/help" className="hover:text-yellow-600">
                  Help
                </a>
              </p>
              <p>
                <a href="/contact" className="hover:text-yellow-600">
                  Contact Us
                </a>
              </p>
            </div>

            {/* Contact */}
            <div>
              <h6 className="uppercase font-bold mb-4">Contact</h6>
              <p>📍 New York, NY 10012, US</p>
              <p>✉️ info@zenvy.com</p>
              <p>📞 +01 234 567 88</p>
              <p>📠 +01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4 bg-[rgba(0,0,0,0.05)] mt-6">
        © 2026 Copyright:{" "}
        <a href="/" className="font-bold hover:text-yellow-600">
          Zenvy
        </a>
      </div>
    </footer>
  );
};

export default Footer;