import { members } from "@/constants/home-data";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/hero/hero-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      id="banner"
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 lg:bg-size-[16%] bg-size-[60%] "
    >
      <div className=" container mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-[950px] mx-auto">
            <span>Where Innovation Sparks </span>
            <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary ">
              Digital Excellence
            </span>
          </h1>
        </div>

        {/* Social proof */}
        <div
          className="
        flex items-center justify-center gap-4 py-4 px-6 rounded-full backdrop-blur-sm shadow-sm 
        border border-white/80 w-fit mx-auto 
      "
        >
          <div className="flex -space-x-3 relative">
            {members.map((m, i) => (
              <div
                key={i}
                className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-3"
              >
                <Image
                  key={i}
                  src={m?.img}
                  height={80}
                  width={80}
                  alt={m?.name}
                  className="border-2 border-white shadow-md hover:z-50 object-cover rounded-full h-10 w-10"
                />

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

          {/* Stars  */}
          <div>
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-xs lg:text-sm font-semibold text-[#121212] text-nowrap">
              125k+ Customer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
