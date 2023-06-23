import React from "react";

export default async function Quotes() {
  const res = await fetch("https://api.quotable.io/quotes/random", {
    next: { revalidate: 0 },
  });
  const quote = await res.json();
  return (
    <div>
      <h2 className="selection:text-[#8fdcc2] selection:bg-[#233831] text-[#233831] bg-[#8fdcc2] relative text-center font-bold">
        {`"${quote[0]?.content || "..."}"`}
      </h2>
      <h3 className="selection:text-[#233831] selection:bg-[#8fdcc2] text-right mt-4">{`— ${
        quote[0]?.author || "..."
      }`}</h3>
    </div>
  );
}
