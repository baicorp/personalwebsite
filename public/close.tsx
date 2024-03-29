"use client";

import React from "react";
import { useThemeContext } from "@/context/ThemeProvider";

export default function Close({ className }: { className?: string }) {
  const { theme } = useThemeContext();

  return (
    <svg
      height="512"
      viewBox="0 0 512 512"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title />
      <path
        fill={`${theme === "dark" ? "#fff" : "#000"}`}
        d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm75.31,260.69a16,16,0,1,1-22.62,22.62L256,278.63l-52.69,52.68a16,16,0,0,1-22.62-22.62L233.37,256l-52.68-52.69a16,16,0,0,1,22.62-22.62L256,233.37l52.69-52.68a16,16,0,0,1,22.62,22.62L278.63,256Z"
      />
    </svg>
  );
}
