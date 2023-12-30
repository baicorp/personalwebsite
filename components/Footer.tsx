import React from "react";
import Link from "next/link";
import { footerList } from "@/constant";

export default function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto px-5 py-8  md:p-16 space-y-12">
      <FooterList footerList={footerList} />
      <p className="text-text-color flex items-center gap-2 text-sm">
        ©️ {new Date().getFullYear()} <span className="text-sm">•</span> Bagus
        Atok Illah
      </p>
    </footer>
  );
}

function FooterList({ footerList }: { footerList: FooterListItem[] }) {
  return (
    <div className="flex gap-8 md:gap-12">
      {footerList.map((data) => {
        return (
          <FooterItem key={data.id} title={data.title} links={data.links} />
        );
      })}
    </div>
  );
}

function FooterItem({ title, links }: FooterListItemProps): JSX.Element {
  return (
    <div>
      <h3 className="text-headings-color">{title}</h3>
      <div className="flex flex-col gap-2 mt-3">
        {links.map((link) => {
          return (
            <Link key={link.id} href={link.linkSource} target="_blank">
              <p className="text-text-color md:text-lg">{link.linkName}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
