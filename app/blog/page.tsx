import React from "react";
import { Metadata } from "next";
import { ListBlogPost } from "@/components";

export const metadata: Metadata = {
  title: "Blog",
};

export default function page() {
  return (
    <main>
      <section className="max-w-[1200px] mx-auto px-5 py-8 md:p-16 space-y-12">
        <h1 className="text-headings-color">blog 📰</h1>
        <ListBlogPost />
      </section>
    </main>
  );
}
