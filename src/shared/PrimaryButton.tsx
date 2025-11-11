import Link from "next/link";
import React from "react";

interface PrimaryButtonProps {
  text: string;
  href?: string;
}
export default function PrimaryButton({
  text,
  href = "#",
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground font-medium rounded-full hover:bg-foreground hover:text-background transition-all duration-300 w-fit"
    >
      {text}
      <span className="text-lg">→</span>
    </Link>
  );
}
