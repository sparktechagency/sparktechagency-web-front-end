import { Star } from "lucide-react";

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
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight max-w-[950px] mx-auto">
            <span>Where Innovation Sparks </span>
            <span className="text-5xl md:text-6xl font-bold bg-linear-to-r from-lime-400 via-lime-500 to-green-500 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-4 py-4  backdrop-blur-3xl">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-linear-to-br from-slate-300 to-slate-400 flex items-center justify-center text-xs font-semibold text-slate-700"
              >
                {i}
              </div>
            ))}
          </div>
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
