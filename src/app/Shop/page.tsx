'use client';
import React from 'react';
import { NavBar } from '../Component/Navbar';
import Vase from '../vase/page';  // Path to your Vase component

const Shop = () => {
  return (
    <div className="bg-white"> {/* Set background color to white */}
      {/* NavBar */}
      <NavBar bgColor="bg-[#FFFFFF]" />

      {/* Vase component */}
      <Vase />
    </div>
  );
};

export default Shop;