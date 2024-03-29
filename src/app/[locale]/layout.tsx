import type { Metadata } from "next";
import { inter } from "../../ui/fonts";
import { Header } from "@/components/header";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata: Metadata = {
  title: "Angela - Portfolio",
  description: "My personal portfolio :)",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} h-screen flex flex-col`}>
        <Header />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
