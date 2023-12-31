import React from "react";
import { ListBlogPost } from "@/components";

export default function page() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 py-8 md:p-16 space-y-12">
      <h1 className="text-headings-color">blog 📰</h1>
      <ListBlogPost />
    </section>
  );
}
