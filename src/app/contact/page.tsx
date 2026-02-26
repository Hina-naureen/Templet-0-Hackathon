import React from 'react';
import { NavBar } from '../Component/Navbar';
import Footer from '../Component/Footer';

const ContactPage = () => {
  return (
    <div>
      <NavBar bgColor="bg-[#FFFFFF]" />
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl text-center mb-8">
          Have a question? We would love to hear from you. Send us a message and we will respond as soon as possible.
        </p>
        <div className="w-full max-w-md flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
            Send Message
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
