import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { AOSInit } from './aos'
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <AOSInit />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
