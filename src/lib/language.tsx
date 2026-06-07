"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "ru" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ru");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");

    if (savedLanguage === "ru" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      toggleLanguage: () => setLanguageState((current) => (current === "ru" ? "en" : "ru")),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

export function localize<T>(value: T | Partial<Record<Language, T>>, language: Language): T {
  if (value && typeof value === "object" && ("ru" in value || "en" in value)) {
    const localizedValue = value as Partial<Record<Language, T>>;
    return (localizedValue[language] ?? localizedValue.ru ?? localizedValue.en) as T;
  }

  return value as T;
}
