import { members } from "@/constants/home-data";
import { Avatar } from "antd";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/hero/hero-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "16%",
        backgroundPosition: "center",
      }}
      id="banner"
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className=" container mx-auto text-center space-y-8">
        {/* Main headline */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight max-w-[950px] mx-auto">
            <span>Where Innovation Sparks </span>
            <span className="text-5xl md:text-6xl font-bold text-primary ">
              Digital Excellence
            </span>
          </h1>
        </div>

        {/* Social proof */}
        <div
          className="
        flex items-center justify-center gap-4 py-4 px-6 rounded-full
        bg-white/10 backdrop-blur-2xl shadow-lg 
        border border-white/30 w-fit mx-auto
      "
        >
          {/* Avatars */}
          <div className="flex -space-x-3 relative">
            {members.map((m, i) => (
              <div
                key={i}
                className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-3"
              >
                {/* Avatar */}
                <Image
                  key={i}
                  src={m?.img}
                  height={80}
                  width={80}
                  alt={m?.name}
                  className="border-2 border-white shadow-md hover:z-50 object-cover rounded-full h-10 w-10"
                />

                {/* Tooltip */}
                <div
                  className="
                absolute left-1/2 -translate-x-1/2 
                -top-10 opacity-0 group-hover:opacity-100 
                bg-black text-white text-sm px-3 py-1 rounded-full
                transition-all duration-300 pointer-events-none
                whitespace-nowrap shadow-lg
              "
                >
                  {m.name}
                </div>
              </div>
            ))}
          </div>

          {/* Stars + text */}
          <div>
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-slate-700">
              125k+ Customer
            </p>
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className="pt-8">
          <button className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div> */}
      </div>
    </section>
  );
}
