"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface SparklansNavigationProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

export function SparklansNavigation({
  onPrevClick,
  onNextClick,
}: SparklansNavigationProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex gap-3">
        <button
          onClick={onPrevClick}
          className="p-2 bg-[#586E58] hover:bg-[#617961] text-white rounded-full transition-colors cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={onNextClick}
          className="p-2 bg-[#586E58] hover:bg-[#617961] text-white rounded-full transition-colors cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
