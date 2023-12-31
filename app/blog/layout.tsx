import { ReactNode } from "@mdx-js/react/lib";
import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Blog",
  },
};

function layout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}

export default layout;
