"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logosTop = [
  "/assets/logos/logo1.png",
  "/assets/logos/logo2.png",
  "/assets/logos/logo3.png",
  "/assets/logos/logo4.png",
  "/assets/logos/logo5.png",
  "/assets/logos/logo6.png",
  "/assets/logos/logo7.png",
  "/assets/logos/logo8.png",
  "/assets/logos/logo9.png",
];

const logosBottom = [
  "/assets/logos/logo1.png",
  "/assets/logos/logo2.png",
  "/assets/logos/logo3.png",
  "/assets/logos/logo4.png",
  "/assets/logos/logo5.png",
  "/assets/logos/logo6.png",
  "/assets/logos/logo7.png",
  "/assets/logos/logo8.png",
  "/assets/logos/logo9.png",
];

// Small logo card component
const LogoCard = ({ src }: { src: string }) => {
  return (
    <div className="mx-6 flex items-center justify-center">
      <Image
        src={src}
        className="w-36 h-20 object-contain  hover:grayscale-0 transition cursor-pointer"
        alt="logo"
        width={200}
        height={100}
      />
    </div>
  );
};
export default function LogoMarquee() {
  return (
    <div className="w-full space-y-9">
      {/* Top Row- left */}
      <Marquee
        pauseOnHover={true}
        speed={50}
        gradient={true}
        autoFill
        direction="right"
      >
        {logosTop?.map((src, i) => (
          <LogoCard key={i} src={src} />
        ))}
      </Marquee>

      {/* Bottom Row- right */}
      <Marquee
        pauseOnHover={true}
        speed={50}
        gradient={true}
        direction="left"
        autoFill
      >
        {logosBottom?.map((src, i) => (
          <LogoCard key={i} src={src} />
        ))}
      </Marquee>
    </div>
  );
}
