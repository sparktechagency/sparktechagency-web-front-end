"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Drawer, ConfigProvider } from "antd";
import { usePathname } from "next/navigation";
import navItems from "@/constants/navItem";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// gsap.registerPlugin(ScrollTrigger);

export default function Navbar({ t }: any) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      const scrollY = window.scrollY;

      // Change navbar background after banner height
      setIsScrolled(scrollY > bannerHeight - 80);

      // Hide/show navbar based on scroll direction
      if (scrollY > lastScrollTop.current && scrollY > 100) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }

      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  


  return (
    <nav
      id="navbar"
      className={` z-50 w-full  navbar-container   transition-all duration-500 ease-in-out
        ${
          isScrolled
            ? "fixed top-5 2xl:top-20"
            : "bg-transparent lg:bg-transparent md:px-8 2xl:px-0  lg:backdrop-blur-none absolute   lg:mt-10 "
        }
        ${showNavbar ? "translate-y-0" : "-translate-y-28"}
    
      `}
    >
      <div
        className={`w-fit mx-auto px-4 lg:px-8  py-4 transition-colors duration-300 bg-[#080808] rounded-full inner-shadow-white h-16 flex items-center justify-center`}
      >
        <div className="flex items-center justify-center">
          {/* Logo */}
          {/* <Link href={"/"} className="shrink-0 -mt-2">
            <Image
              src="/Logo.svg"
              alt="VIAJIA Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link> */}

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems?.map((item, index) => {
              const isActive = item.href === pathname;
              const isLogoItem =
                item.labelKey === "Sparktech" || item.href === "#";

              const middleIndex = Math.floor((navItems.length - 1) / 2);

              if (isLogoItem && index === middleIndex) {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center scale-[1.15] origin-center"
                  >
                    <Image
                      width={600}
                      height={600}
                      unoptimized
                      src="/assets/logo.png"
                      alt="Sparktech Logo"
                      className="h-16 w-auto p-1.5  bg-[#080808] rounded-full inner-shadow-white"
                    />
                  </div>
                );
              }

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-sm transition-all duration-300 ${
                    isActive
                      ? "relative font-semibold text-white backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                      : "text-white/70 hover:text-white/90"
                  }`}
                  style={{
                    backdropFilter: isActive
                      ? "blur(10px) saturate(120%)"
                      : "none",
                    WebkitBackdropFilter: isActive
                      ? "blur(10px) saturate(120%)"
                      : "none",
                  }}
                >
                  {item.labelKey}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <ConfigProvider
        theme={{
          components: {
            Drawer: {
              colorBgElevated: "#171717",
              colorText: "rgba(255,255,255,0.88)",
            },
          },
        }}
      >
        <Drawer
          title={
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">Menu</span>
              {/* <CloseOutlined onClick={() => setDrawerOpen(false)} /> */}
            </div>
          }
          placement="right"
          width={280}
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          styles={{
            body: {
              background: "#0B0C10",
              color: "#fff",
            },
          }}
        >
          <div className="flex flex-col gap-6 mt-4">
            {navItems?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${
                  item.href === pathname
                    ? "relative font-semibold pl-4 -ml-4 py-2 rounded-lg text-white! bg-[#00BCD1]/20! backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : "text-white! hover:text-cyan-400"
                } text-base   transition-all`}
                onClick={() => setDrawerOpen(false)}
              >
                {item.labelKey}
              </Link>
            ))}

            {/* Download Button */}
            <button className="bg-[#00BCD1] text-white px-6 py-2 rounded-full transition-colors text-sm w-full">
              Download App
            </button>
          </div>
        </Drawer>
      </ConfigProvider>
    </nav>
  );
}
