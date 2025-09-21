"use client"
import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track mobile menu state
  const onHandleSubmit = () => {

  }
  return (
    <div className="bg-black">
      <nav className="flex items-center  mx-auto  max-w-7xl justify-between border-slate-700 px-6 py-4  text-white text-md ">
        <a href="/">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
            <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
          </svg>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 ml-7 font-semibold">
          {["Products", "Stories", "Pricing", "Docs"].map((item) => (
            <a key={item} href="/products" className="relative overflow-hidden h-6 group">
              <span className="block group-hover:-translate-y-full transition-transform duration-300">{item}</span>
              <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">{item}</span>
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden ml-14 md:flex items-center gap-4">
          <Link href={`/login`}>
            <button className="border-2 hover:cursor-pointer border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">Get Started</button>

          </Link>

        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-48 left-0 bg-black w-full flex flex-col items-center gap-4 text-base py-4">
            {["Products", "Customer Stories", "Pricing", "Docs"].map((item) => (
              <a key={item} href="#" className="hover:text-indigo-600">{item}</a>
            ))}
            <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">Get Started</button>
            
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
