"use client";

import { Button } from "antd";
import { ArrowRight } from "lucide-react";

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
  return (
    <div className="bg-[#FDFDFD] rounded-2xl p-6    transition-shadow h-full flex flex-col">
      {/* heading */}
      <p className="text-[#008000] leading-[150%] mb-2">{job.department}</p>
      <h3 className="text-[#000000] text-2xl font-semibold mb-7 max-w-[400px] h-full grow">
        {job.title}
      </h3>

      <div className="flex justify-between items-end">
        {/* Job Details */}
        <div className="space-y-2 text-sm text-[#606060]">
          <p>
            <span className="font-medium ">Vacancy:</span> {job.vacancy}
          </p>
          <p>
            <span className="font-medium ">Onsite -</span> {job.type}
          </p>
          <p>
            <span className="font-medium ">Deadline:</span> {job.deadline}
          </p>
        </div>

        {/* Apply Button */}
        <Button
          type="primary"
          className="bg-black! text-white! shadow-none! h-12! rounded-full! w-[170px] text-base! "
        >
          Job Details
          <ArrowRight size={16} style={{ marginLeft: "4px" }} />
        </Button>
      </div>
    </div>
  );
}
