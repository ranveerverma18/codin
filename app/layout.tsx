import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FORMA — Creative Agency",
  description: "We build the future of your business",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-[#f4ede8] text-[#050505] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
