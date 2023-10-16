import React from "react";
import Image from "next/image";
import TechBadges from "./TechBadges";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  logo,
  link,
  image,
  tech,
}: ProjectItemProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className={`bg-card-background border border-card-border overflow-hidden flex flex-col gap-4 p-4 rounded-lg md:p-8 hover:-translate-y-1 ${
        image ? "row-span-2" : ""
      }`}
    >
      <div className="flex justify-between space-x-4 items-center">
        <div className="space-y-6">
          <h3>{title}</h3>
          <p className="md:tracking-wider">{description}</p>
        </div>
        {logo && (
          <Image
            src={logo}
            width={50}
            height={50}
            alt={`${title}-icon`}
            className="w-24 h-24 object-contain border-2 border-card-border rounded-full"
          />
        )}
      </div>

      <div>
        <div className="flex gap-2 flex-wrap">
          {tech.map((data, index) => {
            return <TechBadges key={index} title={data} />;
          })}
        </div>
        {image && (
          <div className="mt-4 flex justify-center items-center relative min-h-[150px] w-full">
            <Image
              src={image}
              width={300}
              height={300}
              alt={`${title}-image`}
              className="w-[300px] absolute top-0 rounded-lg"
            />
          </div>
        )}
      </div>
    </Link>
  );
}
