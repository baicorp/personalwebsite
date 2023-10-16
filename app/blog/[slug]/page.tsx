// import React from "react";
// import Markdown from "markdown-to-jsx";
// import fs from "fs";
// import Link from "next/link";

import React from "react";
import fs from "fs/promises"; // Import fs with promises support
import path from "path";
import Link from "next/link";
import MarkdownWithCodeHighlight from "@/components/MarkdownFormated";

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // const filePath = `posts/${slug}.md`;
  // const markdownContent = readMarkdownFile(filePath);

  // async function readMarkdownFile(filePath: string): Promise<string | null> {
  //   try {
  //     const response = await fetch(filePath);
  //     if (response.ok) {
  //       const content = await response.text();
  //       return content;
  //     } else {
  //       console.error(
  //         `Error fetching file: ${response.status} ${response.statusText}`
  //       );
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error(`Error: ${error}`);
  //     return null;
  //   }
  // }

  async function readMarkdownFile(filePath: string): Promise<string | null> {
    try {
      const content = await fs.readFile(filePath, "utf-8");
      return content;
    } catch (error) {
      console.error(`Error reading file: ${error}`);
      return null;
    }
  }

  const filePath = path.join(process.cwd(), `posts/${slug}.md`);

  // const filePath = `posts/${slug}.md`;

  const res = await readMarkdownFile(filePath);
  const markdownContent = res;

  return (
    <main>
      <section className="max-w-[728px] mx-auto px-5 py-8 overflow-hidden space-y-12">
        {markdownContent ? (
          <article className="article">
            <MarkdownWithCodeHighlight content={markdownContent} />
          </article>
        ) : (
          <p>
            Something Wrong,
            <Link href={"/blog"}>back to blog </Link>
          </p>
        )}
      </section>
    </main>
  );
}

// function readMarkdownFile(filePath: string): string | null {
//   try {
//     const content = fs.readFileSync(filePath, "utf-8");
//     return content;
//   } catch (error) {
//     console.error(`Error reading file: ${error}`);
//     return null;
//   }
// }
