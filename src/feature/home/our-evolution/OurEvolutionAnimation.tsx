"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {
    timelineWrapperId: string;
    timelineInnerId: string;
    markers?: boolean;
};

export const OurEvolutionAnimation = ({
    timelineWrapperId,
    timelineInnerId,
    markers = false,
}: Props) => {
    useEffect(() => {

        const wrapper = document.getElementById(timelineWrapperId);
        const inner = document.getElementById(timelineInnerId);

        if (!wrapper || !inner) return;

        const timelineHeight = inner.scrollHeight - wrapper.clientHeight;

        const ctx = gsap.context(() => {
            gsap.to(wrapper, {
                scrollTop: timelineHeight,
                ease: "none",
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top-=250 top",
                    end: "bottom bottom",
                    scrub: 3.5, 
                    markers,
                },
            });
        }, wrapper);

        return () => ctx.revert();
    }, []);
    return null;
};
