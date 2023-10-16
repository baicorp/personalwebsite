import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Navbar, Body, Footer } from "@/components";
import ThemeProvider from "@/context/ThemeProvider";
import Script from "next/script";

export const metadata = {
  title: "Bagus Atok Illah",
  description:
    "I am a front-end developer specializing in creating captivating and responsive user interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <Body>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </Body>
      </ThemeProvider>
    </html>
  );
}
