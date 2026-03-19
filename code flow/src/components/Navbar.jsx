import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#020a2d]/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-20 flex justify-between items-center py-3">
        {/* LOGO */}
        <img src="logo.png" alt="" className="w-32" />

        {/* LINKS (Desktop) */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-white">
            Testimonials
          </a>
        </div>

        {/* MENU BUTTON (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#020a2d]/50 px-5 pb-5 flex flex-col gap-4 text-gray-300">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
        </div>
      )}
    </div>
  );
}
