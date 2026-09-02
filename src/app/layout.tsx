import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { LanguageProvider } from "@/lib/language";
import { withBasePath } from "@/lib/paths";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const siteUrl = "https://rdbrg.github.io/product-portfolio";
const title = "Вадим Родберг | Senior Product Designer";
const description =
  "Senior Product Designer с 7-летним опытом в B2B, enterprise и e-commerce: продуктовая стратегия, системный UX, исследования, запуск и развитие по метрикам.";
const previewImage = `${siteUrl}/foto.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: [{ url: withBasePath("/favicon.png"), type: "image/png" }],
    shortcut: withBasePath("/favicon.png"),
    apple: withBasePath("/favicon.png"),
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Вадим Родберг | Portfolio",
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 1200,
        alt: "Вадим Родберг",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [previewImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="relative isolate min-h-screen bg-[#111111]">
            <CursorGlow />
            <Navbar />
            <ScrollToTopButton />
            <div className="relative z-10">{children}</div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
