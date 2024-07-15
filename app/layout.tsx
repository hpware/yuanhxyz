import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BETA! 吳元皓的網站",
  description: "THIS IS A BETA VERSION! IT IS NOT FINISHED YET!",
  keywords: "yuanh.xyz, yuanh, 吳元皓, 吳元皓的網站, BETA WEBSITE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
