"use client";

import { useState } from "react";
import { Tabs } from "antd";
import jobData, { JobData } from "@/constants/jobData";
import JobCard from "./JobCard";

const departments = [
  "All",
  "Programming",
  "Design",
  "Sales",
  "Marketing",
  "Business Development",
];

export default function JobPositions() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredJobs =
    activeTab === "All"
      ? jobData
      : jobData.filter((job) => job.department === activeTab);

  const jobsByRow: JobData[][] = [];
  for (let i = 0; i < filteredJobs.length; i += 2) {
    jobsByRow.push(filteredJobs.slice(i, i + 2));
  }

  const tabItems = departments.map((dept) => ({
    key: dept,
    label: dept,
  }));

  return (
    <section className="container py-10 mt-20 lg:px-[60px] bg-[#EEEEEE] rounded-t-[90px]">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-primary  font-semibold text-[32px] mb-2 tracking-wide">
          Openings
        </p>
        <h1 className="section-title mb-16">
          Open Job Positions
        </h1>

        {/* Tabs */}
        <div className=" mb-10">
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            items={tabItems}
            className="job-positions-tabs"
            tabBarStyle={{
              borderBottom: "1px solid #929292",
            }}
          />
        </div>
      </div>

      {/* Job Grid */}
      <div className="space-y-5">
        {jobsByRow.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {row?.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ))}
      </div>

      <style jsx global>{`
        .job-positions-tabs .ant-tabs-tab {
          padding: 0 12px;
          font-size: 18px;
          font-weight: 500;
          color: #929292 !important;
          border-bottom: 2px solid transparent !important;
        }

        .job-positions-tabs .ant-tabs-tab .ant-tabs-tab-active {
          color: #000000 !important;
          border-bottom-color: #09320a !important;
        }

        .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #000000 !important;
          text-shadow: 0 0 0.25px currentcolor;
          border-bottom-color: #09320a !important;
        }

        .job-positions-tabs .ant-tabs-tab:hover {
          color: #000 !important;
        }

        .job-positions-tabs .ant-tabs-ink-bar {
          background: #000;
          height: 2px !important;
        }
      `}</style>
    </section>
  );
}
