import React from "react";
import Link from "next/link";
import Quotes from "./Quotes";
import { Suspense } from "react";

function Footer() {
  return (
    <section className="mx-auto max-w-[1200px] p-8 md:p-16 md:pt-24 ">
      <div>
        <h3>
          Find me <span className="inline-block animate-bounce">🫰</span>
        </h3>
        <div className="mt-4 flex flex-col gap-8 justify-between md:flex-row">
          <div className="flex flex-col gap-2">
            <Link
              href={"https://linkedin.com/in/baillah"}
              target="_blank"
              className=""
            >
              <p className="">Linkedin</p>
            </Link>
            <Link
              href={"https://github.com/baicorp"}
              target="_blank"
              className="inline"
            >
              <p className="">Github</p>
            </Link>
          </div>
          <div className=""></div>
        </div>
      </div>
      <p className="mt-8 flex items-center gap-2">
        ©️ {new Date().getFullYear()} <span className="text-sm">•</span> Bagus
        Atok Illah
      </p>
    </section>
  );
}

export default Footer;
