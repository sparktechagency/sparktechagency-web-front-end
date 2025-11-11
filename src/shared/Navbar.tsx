"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Drawer, ConfigProvider } from "antd";
import { usePathname } from "next/navigation";
import navItems from "@/constants/navItem";

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-28"}  `}
    >
      <div
        className={`w-fit mx-auto px-4 lg:px-8 py-4 transition-colors duration-300 bg-[#041904] rounded-full inner-shadow-white h-16 flex items-center justify-center mt-4`}
      >
        <div className="flex items-center justify-center">
          {/* Desktop Navigation */}
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
                      className="h-16 w-auto p-1.5 bg-[#080808] rounded-full inner-shadow-white"
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
                      ? "relative font-semibold text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  style={{
                    backdropFilter: isActive ? "blur(10px) saturate(120%)" : "none",
                    WebkitBackdropFilter: isActive ? "blur(10px) saturate(120%)" : "none",
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
                    ? "relative font-semibold pl-4 -ml-4 py-2 rounded-lg text-white bg-[#00BCD1]/20 backdrop-blur-md"
                    : "text-white hover:text-cyan-400"
                } text-base transition-all`}
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
