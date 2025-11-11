"use client";
import React, { useState, useEffect } from "react";
import GreetingCard from "./GreetingCard";
import QuarterText from "./QuarterText";
import items from "@/constants/quarter";



const SliderSection = () => {
  const [index, setIndex] = useState(0);

  // Switch the slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2500); //= 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 h-full justify-center items-center py-20">
      <QuarterText name={items[index]?.name} quote={items[index]?.description} />
      <div className="relative w-full">
        <GreetingCard items={items} index={index} setIndex={setIndex} />
      </div>
    </section>
  );
};

export default SliderSection;
