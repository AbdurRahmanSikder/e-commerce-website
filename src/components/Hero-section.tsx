"use client"
import React, { useState } from "react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className=" bg-cover bg-center bg-no-repeat text-slate-800 text-sm max-w-7xl mx-auto"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="flex flex-col-reverse gap-10 md:flex-row  pt-4 md:pt-12">
        {/* Text Content */}
        <div className="max-md:text-center">
          <h5 className="text-4xl md:text-[76px] font-semibold max-w-2xl text-slate-900">
            Discover the products you love, delivered fast.
          </h5>
          <p className="text-sm md:text-base max-w-md mt-6 max-md:px-2 text-slate-600">
            Quality, style, and convenience—all in one place.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button aria-label="appleStoreBtn" className="active:scale-95 transition-all">
              <img
                className="md:w-40"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/appleStoreBtn.svg"
                alt="appleStoreBtn"
              />
            </button>
            <button aria-label="googlePlayBtn" className="active:scale-95 transition-all">
              <img
                className="md:w-40"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/googlePlayBtn.svg"
                alt="googlePlayBtn"
              />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:max-w-xs lg:max-w-lg">
          <img
            className="w-full h-auto"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/users-group.png"
            alt="Users group"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
