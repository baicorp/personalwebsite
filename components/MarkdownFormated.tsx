import React from "react";
import Markdown from "markdown-to-jsx";
import Code from "./Code";

export default function MarkdownWithCodeHighlight({ content }) {
  const options = {
    overrides: {
      code: ({
        children,
        className,
      }: {
        children: string;
        className: string | undefined;
      }) => {
        return <Code language={className}>{children}</Code>;
      },
    },
  };

  return <Markdown options={options}>{content}</Markdown>;
}
