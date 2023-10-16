"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeProvider";

type Theme = "light" | "dark";

export default function Navbar() {
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      window.localStorage.setItem("theme", "dark");
    }
    if (theme === "light") {
      window.localStorage.setItem("theme", "light");
    }
  }, [theme]);

  function changeTheme(theme: Theme) {
    setTheme(theme);
  }

  console.log("navigation");

  return (
    <header className="z-50 flex items-center sticky top-0 backdrop-blur-sm">
      <nav className="px-5 py-5 w-full">
        <div className="flex items-center mx-auto lg:max-w-7xl">
          <Link
            href="/"
            className="mr-auto font-bold text-lg text-headings-color"
          >
            — bai.dev
          </Link>
          <ThemeSwitcher theme={theme} changeTheme={changeTheme} />
        </div>
      </nav>
    </header>
  );
}

function ThemeSwitcher({ theme, changeTheme }): JSX.Element {
  return (
    <button
      type="button"
      aria-label="theme button"
      className="flex gap-2 w-10 h-10 p-2 border border-card-border bg-card-background rounded-lg ml-8"
      onClick={() => {
        changeTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        <svg
          className="w-full h-full fill-text-color"
          data-name="Layer 2"
          id="Layer_2"
          viewBox="0 0 35 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z" />
        </svg>
      ) : (
        <svg
          className="w-full h-full fill-text-color"
          version="1.1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="st0" id="grid_system" />
          <g id="_icons">
            <path d="M7,12c0,2.8,2.2,5,5,5s5-2.2,5-5s-2.2-5-5-5S7,9.2,7,12z M12,9c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S10.3,9,12,9z" />
            <path d="M13,5V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v2c0,0.6,0.4,1,1,1S13,5.6,13,5z" />
            <path d="M19.1,4.9c-0.4-0.4-1-0.4-1.4,0l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4   C19.5,6,19.5,5.3,19.1,4.9z" />
            <path d="M21,11h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S21.6,11,21,11z" />
            <path d="M17.7,16.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4   L17.7,16.2z" />
            <path d="M11,19v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2c0-0.6-0.4-1-1-1S11,18.4,11,19z" />
            <path d="M4.9,19.1c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-1.4,1.4   C4.5,18,4.5,18.7,4.9,19.1z" />
            <path d="M2,12c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1s-0.4-1-1-1H3C2.4,11,2,11.4,2,12z" />
            <path d="M6.3,4.9c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.4,1.4C6.5,8,6.8,8.1,7.1,8.1S7.6,8,7.8,7.8c0.4-0.4,0.4-1,0-1.4L6.3,4.9z" />
          </g>
        </svg>
      )}
    </button>
  );
}
