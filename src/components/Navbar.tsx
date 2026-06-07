"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language";

export function Navbar() {
  const [isCasesActive, setIsCasesActive] = useState(false);
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToCases = () => {
    const el = document.getElementById("product-cases");
    if (!el) return;

    // Account for fixed navbar height + spacing.
    const y = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!isHomePage) {
      setIsCasesActive(false);
      return;
    }

    const onScroll = () => {
      const cases = document.getElementById("product-cases");
      if (!cases) {
        setIsCasesActive(false);
        return;
      }

      setIsCasesActive(cases.getBoundingClientRect().top <= 140);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  const mainHref = isHomePage ? (isCasesActive ? "#" : "#product-cases") : "/";
  const mainLabel = isHomePage ? (isCasesActive ? (language === "ru" ? "Главная" : "Home") : language === "ru" ? "Кейсы" : "Cases") : language === "ru" ? "Главная" : "Home";

  return (
    <header className="fixed left-5 right-5 top-6 z-50 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.42),rgba(255,47,167,0.34)_34%,rgba(255,255,255,0.08)_58%,rgba(255,255,255,0.24))] p-px shadow-[0_18px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.22)] sm:left-8 sm:right-8 lg:left-12 lg:right-12">
      <div className="relative flex items-center justify-between rounded-[calc(1rem-1px)] bg-[#161116]/70 px-5 py-3 backdrop-blur-2xl">
        <nav className="relative flex items-center gap-8 text-base font-semibold sm:gap-12 sm:text-lg">
          <a
            href={mainHref}
            className="transition hover:text-purple"
            onClick={(e) => {
              if (!isHomePage) {
                return;
              }

              e.preventDefault();
              if (isCasesActive) {
                scrollToTop();
              } else {
                scrollToCases();
              }
            }}
          >
            {mainLabel}
          </a>
          <a href="https://t.me/VadimRodberg" className="transition hover:text-purple">
            Telegram
          </a>
          <a href="https://www.linkedin.com/in/vadim-rodberg/" className="transition hover:text-purple">
            LinkedIn
          </a>
        </nav>

        <div className="relative flex items-center gap-3">
          <a
            href="/%D0%92%D0%B0%D0%B4%D0%B8%D0%BC_%D0%A0%D0%BE%D0%B4%D0%B1%D0%B5%D1%80%D0%B3_CV.pdf"
            download
            className="hidden rounded-lg border border-white/15 px-4 py-3 text-base font-semibold transition hover:border-purple hover:text-purple sm:inline-flex"
          >
            ↓ CV
          </a>
          <div className="hidden overflow-hidden rounded-lg border border-white/15 text-base font-semibold sm:flex" aria-label={language === "ru" ? "Переключение языка" : "Language switcher"}>
            {(["ru", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={`px-4 py-3 transition ${language === item ? "bg-[#f5f2ee] text-[#111111]" : "text-white/80 hover:text-purple"}`}
                aria-pressed={language === item}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
