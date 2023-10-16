"use client";

import React, { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import python from "highlight.js/lib/languages/python";
import css from "highlight.js/lib/languages/css";
import shell from "highlight.js/lib/languages/shell";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/vs2015.css";

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("python", python);
hljs.registerLanguage("css", css);
hljs.registerLanguage("shell", shell);
hljs.registerLanguage("typescript", typescript);
hljs.registerAliases(["tsx, typescript", "ts", "tsx", "mts", "cts"], {
  languageName: "typescript",
});

export default function Code({ code, language }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className="shadow shadow-slate-300 border border-slate-300/40 rounded-md">
      <code
        style={{ padding: "20px", borderRadius: "6px" }}
        className={`language-${language}`}
      >
        {code}
      </code>
    </pre>
  );
}
