import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AOSInit } from './aos'
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Fresh Beton Indonesia",
  description: "Demo website untuk Fresh Beton Indonesia",
  icons: {
    icon : "./icon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      {/* <body className={inter.className}>{children}</body> */}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
