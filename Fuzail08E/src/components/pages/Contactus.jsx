import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const feedbackUser = async (e) => {
    e.preventDefault();

    const feedback = {
      fullname,
      email,
      message,
    };

    console.log(feedback)

  
      const response = await axios.post(
        "http://localhost:4000/feedback",
        feedback)
     

      Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});


      // optional reset form
      setFullname("");
      setEmail("");
      setMessage("");

// window.location.assign("/Resgister")

    }


  
  return (
    <div className="min-h-screen bg-[#F3F4F6] py-16 px-6 ">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Section */}
        <div className="bg-[#1B3C53] text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="mb-8 leading-7 text-gray-200">
            We'd love to hear from you! Whether you have a question,
            feedback, or need assistance, our team is here to help.
          </p>

          <div className="space-y-5">
            <div>
              <h4 className="font-semibold text-lg">📍 Address</h4>
              <p className="text-gray-300">
                123 Business Street, Karachi, Pakistan
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">📞 Phone</h4>
              <p className="text-gray-300">+92 300 1234567</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">✉ Email</h4>
              <p className="text-gray-300">
                contact@example.com
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-10">
            <a
              href="#"
              className="border border-gray-400 px-4 py-2 rounded-lg transition duration-300 hover:bg-[#D2C1B6] hover:text-[#1B3C53]"
            >
              Facebook
            </a>

            <a
              href="#"
              className="border border-gray-400 px-4 py-2 rounded-lg transition duration-300 hover:bg-[#D2C1B6] hover:text-[#1B3C53]"
            >
              Instagram
            </a>

            <a
              href="#"
              className="border border-gray-400 px-4 py-2 rounded-lg transition duration-300 hover:bg-[#D2C1B6] hover:text-[#1B3C53]"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-[#1B3C53] mb-8">
            Send a Message
          </h2>

          <form className="space-y-6" onSubmit={feedbackUser}>

            <div>
              <label className="block mb-2 font-medium text-[#1B3C53]" >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E1AD01]"
                required
                value={fullname}
                 onChange={(e) => setFullname(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-[#1B3C53]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E1AD01]"
                required
                   value={email}
                 onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-[#1B3C53]">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E1AD01]"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-[#1B3C53]">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E1AD01]"
                required
                   value={message}
                 onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#1B3C53] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#E1AD01] hover:text-white"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;