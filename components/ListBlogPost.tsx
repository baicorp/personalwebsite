import React from "react";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import fs from "node:fs";

export default function ListBlogPost() {
  const getAllPostMDX = fs
    .readdirSync("posts")
    .filter((data) => data.endsWith(".mdx"));

  const listArticleComponent = getAllPostMDX.map((fileName) => {
    const postContent = fs.readFileSync(`./posts/${fileName}`, "utf8");
    //matter return an obejct {data, content} data for frontmatter, content for the markdown data
    const { data } = matter(postContent);
    return (
      <Article
        key={crypto.randomUUID()}
        title={data.title}
        image={data.image}
        date={data.date}
      />
    );
  });
  return listArticleComponent.length !== 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {listArticleComponent}
    </div>
  ) : (
    <p>
      Embark on a journey into the heart of web development with me. The blog is
      currently under construction, and the code is being written to bring you
      insightful articles, tutorials, and the latest in web technologies. Stay
      tuned as we debug and compile the knowledge to launch our tech-infused
      narratives. In the meantime, explore the other facets of our tech-driven
      universe.
    </p>
  );
}

function Article({ title, image, date }: ArticleMetadata) {
  return (
    <article
      key={crypto.randomUUID()}
      className="p-4 border border-card-border rounded-lg hover:bg-card-background "
    >
      <Image
        src={`${image}`}
        width={80}
        height={80}
        alt="image post"
        className="w-full aspect-[6/4] rounded-md mb-3"
      />
      <div className="flex flex-col gap-3 justify-between">
        <p className="text-base">{date}</p>
        <Link href={`blog/${title.replaceAll(" ", "-").toLowerCase()}`}>
          <h3 className="leading-tight text-xl">{title}</h3>
        </Link>
      </div>
    </article>
  );
}
