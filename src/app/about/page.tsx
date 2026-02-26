import React from 'react';
import { NavBar } from '../Component/Navbar';
import Footer from '../Component/Footer';

const AboutPage = () => {
  return (
    <div>
      <NavBar bgColor="bg-[#FFFFFF]" />
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          Welcome to Meubel House. We provide high-quality furniture for your home.
          Our collection is designed to bring elegance and comfort to every room.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
