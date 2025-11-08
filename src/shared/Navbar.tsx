"use client";

import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      const scrollY = globalThis.scrollY;
      // console.log("scroll", scrollY);
      // Change navbar background after banner
      setIsScrolled(scrollY > bannerHeight - 80);

      // Hide/show logic
      if (scrollY > lastScrollTop.current && scrollY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    };

    globalThis.addEventListener("scroll", handleScroll);
    // console.log("inside");
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      if (window.scrollY > bannerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` navbar-container 
        ${
          isScrolled
            ? "fixed top-10  z-50 w-full  mt-0"
            : "bg-transparent lg:bg-transparent md:px-8 2xl:px-0  lg:backdrop-blur-none mt-6  lg:mt-10 absolute top-[700px] w-full"
        }

      `}
    >
      <div className="w-full max-w-2xl mx-auto px-6 py-4 bg-slate-900 rounded-full shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-white">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-lime-400 to-green-500 flex items-center justify-center">
              <span className="text-slate-900 text-sm">⚡</span>
            </div>
            <span className="hidden sm:inline">Sparktech</span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {[
              "Home",
              "Services",
              "Life at Spark",
              "Company",
              "Career",
              "Contact",
            ].map((label) => (
              <a
                key={label}
                href="#"
                className="text-sm text-slate-300 hover:text-white transition duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile */}
          <button className="md:hidden text-white p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
