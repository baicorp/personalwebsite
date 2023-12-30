// components/mdx-remote.js

import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Code from "./Code";
import { ReactElement } from "react";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="leading-[110%] text-4xl lg:text-6xl mb-4 mt-10 ">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="leading-[110%] mb-4 mt-10 text-text-h3 font-extrabold">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="leading-[110%] mb-4 mt-10">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="leading-[110%] mb-4 mt-10">{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className="leading-[110%] mb-4 mt-10">{children}</h5>
  ),
  h6: ({ children }) => (
    <h6 className="leading-[110%] mb-4 mt-10">{children}</h6>
  ),
  p: ({ children }) => (
    <p className="leading-relaxed tracking-wide my-4">{children}</p>
  ),
  ul: ({ children }) => <ul className="pl-6 list-disc">{children}</ul>,
  ol: ({ children }) => <ol className="pl-6 list-decimal">{children}</ol>,
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-[#0072f5] hover:underline hover:decoration-wavy"
    >
      {children}
    </a>
  ),
  img: (props) => (
    <Image
      width={1000}
      height={1000}
      className="w-full h-auto rounded-lg"
      {...(props as ImageProps)}
    />
  ),
  code: ({ children }) => (
    <code className="p-[1px] text-base rounded-sm border border-card-border text-text-color bg-[#2a2828]">
      {children}
    </code>
  ),
  pre: ({ children }: { children: ReactElement }) => {
    return (
      <Code language={children.props?.className}>
        {children.props?.children}
      </Code>
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="italic px-4 py-2 border-l-4 border-accent-color bg-card-background">
      {children}
    </blockquote>
  ),
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
