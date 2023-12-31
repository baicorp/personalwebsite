"use client";

import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import html from "react-syntax-highlighter/dist/esm/languages/prism/xml-doc";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";

SyntaxHighlighter.registerLanguage("html", html);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("bash", bash);

export default function PreSyntaxHighlighter({
  language,
  children,
}: CodeProps) {
  return (
    <div className="text-end border border-[#f3f5f726] bg-black rounded-md overflow-hidden">
      <p className="text-sm py-2 pr-4 m-0 border-b border-[#f3f5f726] text-white">
        {language.replace("language-", "")}
      </p>
      <SyntaxHighlighter
        style={oneDark}
        customStyle={{
          margin: 0,
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          fontSize: "15px",
          backgroundColor: "#0a0a0a",
        }}
        showLineNumbers
        language={language.replace("language-", "")}
        CodeTag={({ children }) => (
          <code className="text-xs md:text-[.94rem]">{children}</code>
        )}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
