"use client";
import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import navItems from "@/constants/navItem";
import OutlineButton from "./OutlineButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (pageName: string) => {
    setExpandedItems((prev) =>
      prev.includes(pageName)
        ? prev.filter((item) => item !== pageName)
        : [...prev, pageName]
    );
  };

  const renderMenuItem = (page: any) => {
    const isExpanded = expandedItems.includes(page.name);
    const isActive = pathname === page.href;

    if (page.hasDropdown && (page.dropdownItems || page.megaSections)) {
      return (
        <div key={page.name} className="overflow-hidden">
          <div
            onClick={() => toggleExpand(page.name)}
            className={`flex items-center justify-between py-2.5 cursor-pointer ${
              isActive ? "text-primary" : "text-[#E6EBE7]"
            }`}
          >
            <span className="text-lg font-normal">{page.name}</span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-[#E6EBE7]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#E6EBE7]" />
            )}
          </div>

          {isExpanded && (
            <div className="p-4 space-y-3 mb-1 bg-white/70 rounded-md shadow-sm">
              {page.dropdownItems?.map((item: any) => (
                <Link
                  key={item.key}
                  href={item.link}
                  onClick={onClose}
                  className="block text-[16px] text-gray-700 hover:text-primary px-3 bg-[#BEBEBE]/30 rounded-md py-2.5 w-full"
                >
                  {item.label}
                </Link>
              ))}

              {page.megaSections?.map((section: any) => (
                <div key={section.title} className="pt-2">
                  <p className="text-[16px] font-medium mb-1 text-[#444]">
                    {section.title}
                  </p>
                  <div className="flex flex-col gap-y-2">
                    {section.items?.map((item: any) => (
                      <Link
                        key={item.key}
                        href={item.link}
                        onClick={onClose}
                        className="block py-2 text-sm text-gray-700 hover:text-primary px-2 bg-[#BEBEBE]/30 rounded-md"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={page.labelKey}
        href={page.href}
        onClick={onClose}
        className={`block py-2.5 ${
          isActive ? "font-semibold text-white" : "text-white/70"
        }`}
      >
        <span className="text-lg font-normal">{page.labelKey}</span>
      </Link>
    );
  };

  return (
    <div
      className={`bg-spark shadow-inner border-t  transition-all duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col p-5">
        <nav className="space-y-2">{navItems.map(renderMenuItem)}</nav>
      </div>
    </div>
  );
};

export default MobileMenu;
