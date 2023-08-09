import React from "react";

interface Quote {
  id: string;
  quote: string;
  author: string;
}

async function getQuote(id: number): Promise<Quote> {
  try {
    if (id === 36) {
      id += 1;
    }
    const res = await fetch(`https://dummyjson.com/quotes/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(
        `failed to fetch data. Status: ${res.status} ${res.statusText}`
      );
    }
    return res.json();
  } catch (error) {
    throw error;
  }
}

export default async function Quotes() {
  const id = Math.ceil(Math.random() * 100);
  let quote = { id: "0", quote: "Anyone anything", author: "Bagus Atok Illah" };

  try {
    quote = await getQuote(id);
  } catch (error) {
    console.log(error.message);
  }

  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl text-justify font-bold">{quote.quote}</h2>
      <p className="text-right mt-4">{quote.author}</p>
    </div>
  );
}
