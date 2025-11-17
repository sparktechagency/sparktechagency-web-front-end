"use client";

import { useEffect, useRef } from "react";
import { Button } from "antd";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

interface JobCardProps {
  job: {
    id: string;
    department: string;
    title: string;
    vacancy: number;
    type: string;
    deadline: string;
  };
}

export default function JobCard({ job }: JobCardProps) {
  const cardRef = useRef<HTMLDivElement>(null); 
  const router = useRouter();

  useEffect(() => {
    // Entry animation
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, []);

  // Hover animation
  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -5,
      boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-[#FDFDFD] rounded-2xl p-6 border border-transparent hover:border-[#e5e5e5] transition-colors duration-300 h-full flex flex-col"
    >
      {/* heading */}
      <p className="text-[#008000] leading-[150%] mb-2">{job.department}</p>

      <h3 className="text-[#000000] text-2xl font-semibold mb-7 max-w-[400px] h-full grow">
        {job.title}
      </h3>

      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
        {/* Job Details */}
        <div className="space-y-2 text-sm text-[#606060] grid grid-cols-2 md:grid-cols-1 gap-2">
          <p>
            <span className="font-medium">Vacancy:</span> {job.vacancy}
          </p>
          <p>
            <span className="font-medium">Onsite -</span> {job.type}
          </p>
          <p className="col-span-2 md:col-auto">
            <span className="font-medium">Deadline:</span> {job.deadline}
          </p>
        </div>

        {/* Apply Button */}
        <Button
          type="primary"
          className="bg-black! text-white! shadow-none! h-10! lg:h-12! rounded-full! w-[170px]! text-[16px]! flex items-center justify-center gap-1 transition-all duration-300 " 
          onClick={() => router.push(`/career/${job.title}`)}
        >
          Job Details
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>
      </div>
    </div>
  );
}
