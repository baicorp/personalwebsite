import React from "react";
import Image from "next/image";

export default async function Quotes() {
  const res = await fetch("https://api.quotable.io/quotes/random", {
    next: { revalidate: 0 },
  });
  const quote = await res.json();
  return (
    <div className=" selection:text-[#8fdcc2] selection:bg-[#233831]">
      <h2 className="text-[#233831] bg-[#8fdcc2] relative text-center font-bold">
        {`"${quote[0]?.content || "..."}"`}
      </h2>
      <h3 className="text-right mt-4">{`— ${quote[0]?.author || "..."}`}</h3>
    </div>
  );
}
