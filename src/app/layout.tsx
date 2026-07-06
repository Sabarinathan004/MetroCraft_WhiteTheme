import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MetroCraft Group | Building India's Infrastructure Future",
  description:
    "MetroCraft Group delivers transformative infrastructure, engineering, surveying, consultancy and real estate solutions across India. ₹500+ Cr project portfolio.",
  keywords: [
    "infrastructure",
    "construction",
    "engineering",
    "MetroCraft Group",
    "India",
    "government projects",
    "civil construction",
  ],
  openGraph: {
    title: "MetroCraft Group | Building India's Infrastructure Future",
    description:
      "Delivering transformative infrastructure solutions that drive economic growth and sustainable development.",
    type: "website",
    locale: "en_IN",
    siteName: "MetroCraft Group",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
