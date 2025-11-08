"use client";
import React from "react";

const BoostYourBusiness = () => {
  return (
    <div className="relative h-screen w-full bg-linear-to-b from-[#041504] to-[#09320A] overflow-hidden flex flex-col items-center justify-center text-white">
      
      {/* Rotating Earth Background */}
      <div className="absolute  top-[53%] flex items-end justify-center">
        <div className="w-full h-full rounded-full opacity-30 animate-spin-slow">
          <img
            src="/earth.png"
            alt="Earth Background"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="relative z-10 text-center">
        <p className="text-green-400 font-medium mb-2">Why Us?</p>
        <h1 className="text-5xl font-bold leading-snug">
          Boost your business with <br />
          <span className="text-green-400">Fast</span> digital solutions.
        </h1>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 mt-16 grid grid-cols-4 gap-10 text-center">
        <div>
          <h2 className="text-4xl font-bold text-green-400">1600+</h2>
          <p className="text-gray-300 mt-2">Clients</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-green-400">5000+</h2>
          <p className="text-gray-300 mt-2">Successful Projects</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-green-400">80%</h2>
          <p className="text-gray-300 mt-2">Repeat Business</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-green-400">99%</h2>
          <p className="text-gray-300 mt-2">Customer Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default BoostYourBusiness;
