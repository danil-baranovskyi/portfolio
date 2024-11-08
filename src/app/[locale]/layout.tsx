import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "../layouts/Header";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import Footer from "../layouts/Footer";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Locales } from "../dtos";

import "../styles/globals.scss";
import "../styles/reset.scss";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DanBarans",
  description: "DanBarans's portfolio",
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: Locales};
}>) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

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
