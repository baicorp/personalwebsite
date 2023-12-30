import React from "react";
import Image from "next/image";

export default function TechBadges({
  title,
  small,
}: {
  title: string;
  small?: boolean;
}) {
  return (
    <span
      className={`${
        small ? "p-[2px]" : "p-1"
      } inline-flex items-center space-x-2 rounded-lg bg-main-background border border-card-border`}
    >
      <Image
        src={`/tech-logo/${title}.svg`}
        width={10}
        height={10}
        alt={`${title} logo`}
        className="w-4 h-4 object-contain"
      />
      <span className={`text-text-color ${small ? "text-sm" : ""}`}>
        {title}
      </span>
    </span>
  );
}
