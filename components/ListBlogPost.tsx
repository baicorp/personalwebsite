import React from "react";
import { blogPosts } from "@/constant";
import Link from "next/link";
import Image from "next/image";

export default function ListBlogPost() {
  const articles = blogPosts.map((data) => {
    return (
      <article
        key={data.id}
        className="px-8 py-4 bg-card-background border border-card-border rounded-lg"
      >
        <div className="flex gap-8">
          <Image
            src={data.img}
            width={80}
            height={80}
            alt="bun icon"
            className="w-[100px] h-[100px]"
          />
          <div className="flex flex-col justify-between">
            <Link href={"blog/firstPost"}>
              <h3>{data.title}</h3>
            </Link>
            <p>{data.date}</p>
          </div>
        </div>
      </article>
    );
  });

  return <div className="space-y-4">{articles}</div>;
}
