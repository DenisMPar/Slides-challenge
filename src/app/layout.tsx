import type { Metadata } from "next";
import { inter } from "../ui/fonts";
import "./globals.css";
import { HamburguerIcon } from "@/ui/icons/hamburguer-icon";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Angela - Portfolio",
  description: "My personal portfolio :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} h-screen flex flex-col`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
