import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Express Auto Detail | Mobile Auto Detailing in Bucks County, PA",
    template: "%s | Express Auto Detail",
  },
  description:
    "Professional mobile auto detailing in Bucks County, PA. We come to you! Interior & exterior detailing, paint correction, and more within a 30-mile radius.",
  keywords: [
    "mobile auto detailing Bucks County PA",
    "car detailing Bucks County",
    "mobile detailing near me",
    "interior detailing",
    "exterior detailing",
    "Express Auto Detail",
    "paint correction Bucks County",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-dark text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
