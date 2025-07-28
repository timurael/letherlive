import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const locales = ['tr', 'en', 'de'];

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Let Her Live - Support Cemre",
  description: "Help Cemre, a 19-year-old trans woman in Turkey, find safety and survival. Every donation matters.",
  keywords: ["trans rights", "Turkey", "LGBTQ+", "donation", "support", "Cemre"],
  openGraph: {
    title: "Let Her Live - Support Cemre",
    description: "Help Cemre, a 19-year-old trans woman in Turkey, find safety and survival.",
    images: ["/letherlive-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let Her Live - Support Cemre",
    description: "Help Cemre, a 19-year-old trans woman in Turkey, find safety and survival.",
    images: ["/letherlive-logo.png"],
  },
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.variable} font-body bg-black text-white min-h-screen grain-overlay`}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}