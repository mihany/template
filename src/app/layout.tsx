import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HideHeaderFooterWrapper from "./HideHeaderFooterWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hoetzin",
  description: "Welcome to Hoetzin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HideHeaderFooterWrapper>{children}</HideHeaderFooterWrapper>
      </body>
    </html>
  );
}