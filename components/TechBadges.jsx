import React from "react";
import Image from "next/image";

export default function TechBadges({ title }) {
  return (
    <div className="p-[4px] flex items-center space-x-2 rounded-lg bg-[#233831]">
      <Image
        src={`/tech-logo/${title}.svg`}
        width={10}
        height={10}
        alt={`${title} logo`}
        className="w-3 h-3 object-contain"
      />
      <span className="text-[#d4ede4] text-[12px] tracking-wider">{title}</span>
    </div>
  );
}
