import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="text-white z-50 flex items-center h-16 sticky top-0 backdrop-blur-sm">
      <nav className="px-8 w-full borde">
        <div className=" mx-auto lg:max-w-7xl">
          <ul className="flex justify-between">
            <li className="font-bold text-lg text-[#8fdcc2]">
              <Link href="/">— bai.dev</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
