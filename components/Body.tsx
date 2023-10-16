"use client";

import { useThemeContext } from "@/context/ThemeProvider";
import React, { ReactNode, useEffect } from "react";

export default function Body({ children }: { children: ReactNode }) {
  const { theme } = useThemeContext();

  console.log("body");
  return (
    <body
      className={`${
        theme === "dark" ? "dark" : "light"
      } bg-main-background selection:bg-selection-background selection:text-selection-text`}
    >
      {children}
    </body>
  );
}
