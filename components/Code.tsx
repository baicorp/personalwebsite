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

export default function Code({
  children,
  language,
}: {
  children: string;
  language: string | undefined;
}): JSX.Element {
  console.log("class prop nih bos : " + language);

  if (typeof language === "undefined") {
    console.log(language);
    return (
      <code className="p-[1px] text-base md:text-lg rounded-sm border border-card-border text-text-color bg-card-background">
        {children}
      </code>
    );
  } else {
    const extractedLang = language.replace("lang-", "");
    return (
      <div className="text-end border border-[#f3f5f726] bg-[#23272e] rounded-md overflow-hidden">
        <p className="text-sm py-1 pr-4 m-0 border-b border-[#f3f5f726] text-[#d4d4d4]">
          {extractedLang}
        </p>
        <SyntaxHighlighter
          style={oneDark}
          customStyle={{
            margin: 0,
            paddingRight: "2rem",
            paddingLeft: "2rem",
            fontSize: "15px",
          }}
          language={extractedLang}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    );
  }
}
