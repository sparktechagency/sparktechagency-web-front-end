"use client";

import { useState, useMemo } from "react";
import { Tabs } from "antd";
import jobData, { JobData } from "@/constants/jobData";
import JobCard from "./JobCard";

const DEPARTMENTS = [
  "All",
  "Programming",
  "Design",
  "Sales",
  "Marketing",
  "Business Development",
];

export default function JobPositions() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredJobs = useMemo(
    () =>
      activeTab === "All"
        ? jobData
        : jobData.filter((job) => job.department === activeTab),
    [activeTab]
  );

  const jobsByRow = useMemo(() => {
    const rows: JobData[][] = [];
    for (let i = 0; i < filteredJobs.length; i += 2) {
      rows.push(filteredJobs.slice(i, i + 2));
    }
    return rows;
  }, [filteredJobs]);

  return (
    <section className=" py-10 mt-20 bg-[#EEEEEE] rounded-t-[90px]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-primary font-semibold text-[32px] mb-2 tracking-wide uppercase">
            Openings
          </p>
          <h1 className="section-title mb-16">Open Job Positions</h1>

          {/* Tabs */}
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            items={DEPARTMENTS.map((dept) => ({ key: dept, label: dept }))}
            className="job-positions-tabs mb-10"
            tabBarStyle={{ borderBottom: "1px solid #929292" }}
          />
        </div>

        {/* Job Grid */}
        <div className="space-y-5">
          {jobsByRow?.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            >
              {row.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ))}
        </div>

        {/* Global Styles */}
        <style jsx global>{`
          .job-positions-tabs .ant-tabs-tab {
            padding: 0 12px;
            font-size: 18px;
            font-weight: 500;
            color: #929292 !important;
            border-bottom: 2px solid transparent !important;
            transition: color 0.3s ease;
          }

          .job-positions-tabs
            .ant-tabs-tab.ant-tabs-tab-active
            .ant-tabs-tab-btn {
            color: #000 !important;
            text-shadow: 0 0 0.25px currentcolor;
          }

          .job-positions-tabs .ant-tabs-ink-bar {
            background: #000;
            height: 2px !important;
          }

          .job-positions-tabs .ant-tabs-tab:hover {
            color: #000 !important;
          }
        `}</style>
      </div>
    </section>
  );
}
