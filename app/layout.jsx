import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Bagus Atok Illah",
  description:
    "I am a front-end developer specializing in creating captivating and responsive user interfaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#233831] selection:text-[#233831] selection:bg-[#8fdcc2]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}