import React from "react";
import fs from "node:fs";
import Link from "next/link";
import { CustomMDX } from "@/components/CustomMdxRemote";
import matter from "gray-matter";

//generate all post page as static page
export async function generateStaticParams() {
  const getAllPostMDX = fs
    .readdirSync("posts")
    .filter((data) => data.endsWith(".mdx"));

  return getAllPostMDX.map((post) => {
    const postSlug = post.replace(".mdx", "");
    return { slug: postSlug };
  });
}

//generate dynamic metadata
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return {
    title: slug.charAt(0).toUpperCase() + slug.slice(1).replaceAll("-", " "),
  };
}

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
