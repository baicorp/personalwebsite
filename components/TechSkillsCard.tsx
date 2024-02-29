import React from "react";
import Image from "next/image";
import NextJs from "@/public/tech-icons/next js";
import Express from "@/public/tech-icons/express";

export default function TechSkillsCard({ logoName, logo }: TechSkillsProps) {
  return (
    <div className="flex-auto hover:scale-110 duration-150 group/bg relative border border-card-border flex items-center gap-2 p-4 rounded-lg overflow-hidden md:flex-none">
      {logoName === "next js" ? (
        <NextJs className="w-6 h-6" />
      ) : logoName === "express" ? (
        <Express className="w-6 h-6" />
      ) : (
        <Image
          src={logo}
          width={50}
          height={50}
          alt={`${logoName} logo`}
          className="w-6 h-6 object-contain"
        />
      )}
      <p>{logoName}</p>
      <div className="bg-card-background group-hover/bg:opacity-100 duration-150 -z-[2] opacity-40 absolute top-0 left-0 w-full h-full"></div>
    </div>
  );
}
