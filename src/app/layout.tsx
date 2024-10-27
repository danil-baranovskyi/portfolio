import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./layouts/Header";

import "./styles/globals.scss";
import "./styles/reset.scss";
import StyledComponentsRegistry from "./lib/StyledComponentsRegistry";
import Footer from "./layouts/Footer";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer/>
      </body>
    </html>
  );
}
