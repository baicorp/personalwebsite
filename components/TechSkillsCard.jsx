import React from "react";
import Image from "next/image";

export default function TechSkillsCard({ logoName, logo }) {
  return (
    <div className="flex-auto hover:scale-110 duration-150 group/bg relative border border-slate-600 flex items-center gap-2 p-4 rounded-lg overflow-hidden md:flex-none">
      <Image
        src={logo}
        width={50}
        height={50}
        alt={`${logo}-logo`}
        className="w-6 h-6 object-contain"
      />
      <p>{logoName}</p>
      <div className="bg-[#1f4338] group-hover/bg:opacity-100 duration-150 -z-[2] opacity-40 absolute top-0 left-0 w-full h-full"></div>
    </div>
  );
}
