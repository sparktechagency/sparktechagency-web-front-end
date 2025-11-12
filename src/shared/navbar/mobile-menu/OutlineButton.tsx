"use client";

import type React from "react";

interface OutlineButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 border-2 border-[#F69348] text-[#F69348] rounded-md hover:bg-[#F69348] hover:text-white transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
