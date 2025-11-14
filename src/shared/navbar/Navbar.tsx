"use client";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navItems from "@/constants/navItem";
import { Menu, X } from "lucide-react";
import MobileMenu from "./mobile-menu/MobileMenu";
import { gsap } from "gsap";

export default function Navbar() {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuWrapperRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100)
        setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // GSAP animation for mobile collapse
  useLayoutEffect(() => {
    const menu = menuWrapperRef.current;
    if (!menu) return;

    gsap.set(menu, { height: 0, opacity: 0, overflow: "hidden" });

    // Timeline for open/close
    tlRef.current = gsap
      .timeline({ paused: true })
      .to(menu, {
        height: "auto",
        opacity: 1,
        duration: 0.45,
        ease: "power2.out",
      })
      .to(menu, {
        overflow: "visible",
        duration: 0,
      });
  }, []);

  useEffect(() => {
    if (!tlRef.current) return;

    if (mobileMenuOpen) {
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
    }
  }, [mobileMenuOpen]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out 
      ${showNavbar ? "translate-y-0" : "-translate-y-28"}`}
    >
      <div className="w-full lg:w-fit lg:mx-auto px-4 lg:px-8 py-4 transition-colors duration-300 bg-[#041904] lg:rounded-full inner-shadow-white h-16 flex items-center justify-center lg:mt-4">
        <div className="flex items-center justify-between lg:justify-center w-full lg:w-auto ">
          <Link href="/" className="flex items-center lg:hidden">
            <Image
              src="/fullLogo.png"
              alt="Logo"
              height={55}
              width={140}
              className="h-10 w-full lg:h-[50px] lg:w-[140px] -mt-1 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems?.map((item, index) => {
              const isActive = item.href === pathname;
              const isLogoItem =
                item.labelKey === "Sparktech" || item.href === "#";
              const middleIndex = Math.floor((navItems.length - 1) / 2);

              if (isLogoItem && index === middleIndex) {
                return (
                  <Link
                    href={"/"}
                    key={index}
                    className="flex items-center justify-center scale-[1.15] origin-center"
                  >
                    <Image
                      width={600}
                      height={600}
                      unoptimized
                      src="/assets/logo.png"
                      alt="Sparktech Logo"
                      className="h-16 w-auto p-1.5 bg-[#080808] rounded-full inner-shadow-white"
                    />
                  </Link>
                );
              }

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-sm ${
                    isActive
                      ? "relative font-semibold text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.labelKey}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md bg-[#09320A] text-white transition-all duration-300"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Animated Collapsible Wrapper */}
      <div ref={menuWrapperRef} className="lg:hidden">
        <MobileMenu
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </nav>
  );
}
