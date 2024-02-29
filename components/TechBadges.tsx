import React from "react";
import Image from "next/image";
import NextJs from "@/public/tech-icons/next js";
import Express from "@/public/tech-icons/express";

export default function TechBadges({ title }: { title: string }) {
  return (
    <span
      className={`p-1 inline-flex items-center space-x-2 rounded-lg bg-main-background border border-card-border`}
    >
      {title === "next js" ? (
        <NextJs className="w-4 h-4" />
      ) : title === "express" ? (
        <Express className="w-4 h-4" />
      ) : (
        <Image
          src={`/tech-icons/${title}.svg`}
          width={10}
          height={10}
          alt={`${title} icon`}
          className="w-4 h-4 object-contain"
        />
      )}
      <span className="text-text-color text-sm">{title}</span>
    </span>
  );
}
