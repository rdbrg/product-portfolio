import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { LanguageProvider } from "@/lib/language";
import { withBasePath } from "@/lib/paths";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Вадим Родберг | Senior Product Designer",
  description:
    "Senior Product Designer с 7-летним опытом в e-commerce, B2B и enterprise-продуктах. System Design, UX Architecture, research, flow и продуктовые метрики.",
  icons: {
    icon: [{ url: withBasePath("/favicon.png"), type: "image/png" }],
    shortcut: withBasePath("/favicon.png"),
    apple: withBasePath("/favicon.png"),
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
