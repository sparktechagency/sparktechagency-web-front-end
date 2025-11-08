import Link from "next/link";

export default function WhatWeDoLeft() {
  return (
    <div className="flex flex-col justify-center ">
      {/* Subtitle */}
      <div>
        <p className="text-sm lg:text-2xl font-semibold tracking-widest text-primary uppercase mb-2">
          What We Do
        </p>
      </div>

      {/* Main Heading */}

      <h2 className="section-title mb-6">
        Transforming Digital Dreams Into Reality
      </h2>

      {/* Description */}

      <p className="section-subtitle mb-6">
        Empower your business with innovative digital experiences. Our expert
        team combines strategy, design, and technology. Together, we craft
        solutions that drive results and growth.
      </p>

      {/* CTA Button */}
      <div>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground font-medium rounded-full hover:bg-foreground hover:text-background transition-all duration-300 w-fit"
        >
          View more
          <span className="text-lg">→</span>
        </Link>
      </div>
    </div>
  );
}
