"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language";
import { withBasePath } from "@/lib/paths";

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

  const mainHref = isHomePage ? (isCasesActive ? "#" : "#product-cases") : withBasePath("/");
  const mainLabel = isHomePage ? (isCasesActive ? (language === "ru" ? "Главная" : "Home") : language === "ru" ? "Кейсы" : "Cases") : language === "ru" ? "Главная" : "Home";
  const cvHref = withBasePath(
    language === "ru" ? "/%D0%92%D0%B0%D0%B4%D0%B8%D0%BC_%D0%A0%D0%BE%D0%B4%D0%B1%D0%B5%D1%80%D0%B3_CV_RU.pdf" : "/%D0%92%D0%B0%D0%B4%D0%B8%D0%BC_%D0%A0%D0%BE%D0%B4%D0%B1%D0%B5%D1%80%D0%B3_CV_EN.pdf",
  );
  const navButtonClassName =
    "inline-flex items-center rounded-lg px-4 py-2 text-base font-semibold text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple active:bg-white/15";

  return (
    <header className="fixed top-0 z-50 overflow-hidden bg-[#161116]/80 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md w-full justify-between">
      <div className="relative flex items-center justify-between px-5 py-3">
        <nav className="relative flex items-center gap-2 text-base font-semibold sm:text-lg">
          <a
            href={mainHref}
            className={`${navButtonClassName} ${isHomePage && isCasesActive ? "bg-white/10 text-white" : ""}`}
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
          <a href="https://t.me/VadimRodberg" className={navButtonClassName}>
            Telegram
          </a>
          <a href="https://www.linkedin.com/in/vadim-rodberg/" className={navButtonClassName}>
            LinkedIn
          </a>
        </nav>

        <div className="relative flex items-center gap-3">
          <a href={cvHref} download className="hidden rounded-lg bg-white/8 px-4 py-2 text-base font-semibold text-white/80 transition hover:bg-purple/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple active:bg-purple/20 sm:inline-flex">
            ↓ CV
          </a>
          <div className="hidden overflow-hidden rounded-lg bg-white/8 text-base font-semibold sm:flex" aria-label={language === "ru" ? "Переключение языка" : "Language switcher"}>
            {(["ru", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={`px-4 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple ${
                  language === item ? "bg-[#f5f2ee] text-[#111111]" : "text-white/80 hover:bg-white/10 hover:text-white active:bg-white/15"
                }`}
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
