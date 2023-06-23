import React from "react";
import Link from "next/link";
import { footerList } from "@/constant";

function FooterList({ title, links }) {
  return (
    <div>
      <h3>{title}</h3>
      <div className="flex flex-col gap-2 mt-3">
        {links.map((link) => {
          return (
            <Link key={link.id} href={link.linkSource} target="_blank">
              <p className="text-lg">{link.linkName}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <section className="mx-auto max-w-[1200px] p-8 md:p-16 md:pt-24">
      <div className="flex gap-8 md:gap-12">
        {footerList.map((data) => {
          return (
            <FooterList key={data.id} title={data.title} links={data.links} />
          );
        })}
      </div>
      <p className="mt-8 flex items-center gap-2 text-sm">
        ©️ {new Date().getFullYear()} <span className="text-sm">•</span> Bagus
        Atok Illah
      </p>
    </section>
  );
}

export default Footer;
