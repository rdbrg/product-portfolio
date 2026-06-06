"use client";

import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Наверх"
      className={
        "fixed bottom-5 left-5 z-50 rounded-full border border-white/15 bg-[#161116]/75 px-4 py-3 text-sm font-semibold text-white/75 shadow-[0_18px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl transition duration-300 hover:border-purple/60 hover:bg-purple/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-12 " +
        (isVisible ? "opacity-100" : "pointer-events-none opacity-0")
      }
    >
      ↑ Наверх
    </button>
  );
}
