"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const CompanyBanner = () => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    useEffect(() => {
        if (imgRef.current) {
            gsap.to(imgRef.current, {
                rotate: -360,
                duration: 80,
                ease: "none",
                repeat: -1,
            });
        }
    }, []);

    return (
        <section
            className={`min-h-screen 2xl:min-h-screen  bg-spark flex flex-col justify-center items-center text-center rounded-b-[90px] relative overflow-hidden z-10`}
        >
            <div className="z-10 bg-transparent container">
                <div className=" flex items-center justify-between gap-[10%]">
                    <div>
                        <p className=" text-primary text-[32px] font-semibold pb-2"> Sparktech </p>
                        <p className="text-white  text-[48px] font-bold pb-6">Who We Are?</p>
                        <p>
                            We are a team of passionate creatives, skilled engineers, and strategic thinkers united by a shared mission  to craft digital experiences
                            With roots in both the United States and Bangladesh, our global presence gives us diverse perspectives and a deep understanding of modern digital needs. This blend of cultural insight and technical expertise allows us to create solutions that resonate with audiences worldwide.
                        </p>
                    </div>

                    <div className="">
                        <Image src="/company.png" alt="Company" className="w-full h-full object-contain" width={500} height={500} />
                    </div>
                </div>

            </div>

            <div className="absolute top-[65%] flex items-end justify-center">
                <div className="w-full h-full rounded-full animate-spin-slow">
                    <img
                        src="/earth.png"
                        alt="Earth Background"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default CompanyBanner;