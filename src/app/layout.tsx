import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FollowPointer } from "@/components/ui/following-pointer";
import HeroSection from "@/components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suhani Sahu",
  description: "Created By Suhani Sahu",
};

export default function RootLayout({
  children,
}: Readonly<{
  // readonlytype in typescript
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        
        <div className=" w-full flex items-center justify-center">
         <Navbar/>
        
        </div>
        {children}
      </body>
    </html>
  );
}
