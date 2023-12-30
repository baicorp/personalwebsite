import React from "react";
import fs from "node:fs";
import Link from "next/link";
import { CustomMDX } from "@/components/CustomMdxRemote";
import matter from "gray-matter";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  let markdownContent: string | null;

  try {
    const postContent = fs.readFileSync(
      `./posts/${slug.replaceAll("-", " ")}.mdx`,
      "utf8"
    );
    //matter return an obejct {data, content} data for frontmatter, content for the markdown data
    const { content } = matter(postContent);
    markdownContent = content;
  } catch (error) {
    markdownContent = null;
  }

  return (
    <main>
      <section className="max-w-[728px] mx-auto px-5 py-8 overflow-hidden">
        {markdownContent ? (
          <article>
            <CustomMDX source={markdownContent} />
          </article>
        ) : (
          <>
            <p className="font-black text-9xl">404</p>
            <Link
              href={"/blog"}
              className="text-[#0072f5] hover:underline hover:decoration-wavy"
            >
              back to blog{" "}
            </Link>
          </>
        )}
      </section>
    </main>
  );
}
