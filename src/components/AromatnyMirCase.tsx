"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import type { Language } from "@/lib/language";
import { useLanguage } from "@/lib/language";
import { withBasePath } from "@/lib/paths";

type PreviewScreen = {
  label: string;
  src: string;
};

const screens = [
  {
    key: "home",
    src: "/screens/aromatnymir/Главная страница.png",
    label: {
      ru: "Главная страница: вход в e-commerce-сценарий и переход к каталогу.",
      en: "Home page: entry point into the e-commerce scenario and transition to the catalogue.",
    },
  },
  {
    key: "catalogue",
    src: "/screens/aromatnymir/Каталог.png",
    label: {
      ru: "Каталог: поиск, категории и фильтры как основа выбора товара.",
      en: "Catalogue: search, categories, and filters as the foundation for product selection.",
    },
  },
  {
    key: "product",
    src: "/screens/aromatnymir/Карточка товара.png",
    label: {
      ru: "Карточка товара: цена, наличие, характеристики и следующий шаг к покупке.",
      en: "Product page: price, availability, characteristics, and the next step toward purchase.",
    },
  },
] as const;

export function AromatnyMirCase({ project }: { project: Project }) {
  const { language } = useLanguage();
  const localizedProject = { ...project, ...(project.i18n?.[language] ?? {}) };
  const [previewScreen, setPreviewScreen] = useState<PreviewScreen | null>(null);

  return (
    <>
      <div className="mx-auto max-w-[1800px] px-6 pb-24 pt-16 text-[#f5f2ee] sm:px-10 lg:px-14">
        <TextBlock title={language === "ru" ? "Контекст" : "Context"} items={localizedProject.caseStudy.context} />
        <TextBlock title={language === "ru" ? "Роль" : "Role"} items={localizedProject.caseStudy.role} columns />
        <ScreensBlock items={[screens[0]]} language={language} onPreview={setPreviewScreen} />

        <TextBlock title={language === "ru" ? "Проблема со стороны пользователей" : "User Problem"} items={localizedProject.caseStudy.problemUser} />
        <TextBlock title={language === "ru" ? "Проблема со стороны бизнеса" : "Business Problem"} items={localizedProject.caseStudy.problemBusiness} />
        <TextBlock title={language === "ru" ? "Исследования и инсайты" : "Research and Insights"} items={localizedProject.caseStudy.research} />
        <ScreensBlock items={[screens[1]]} language={language} onPreview={setPreviewScreen} />

        <TextBlock title={language === "ru" ? "Гипотеза" : "Hypothesis"} items={localizedProject.caseStudy.hypothesis} />
        <TextBlock title={language === "ru" ? "Решение" : "Solution"} items={localizedProject.caseStudy.solution} columns />
        <TextBlock title={language === "ru" ? "Проверка" : "Validation"} items={localizedProject.caseStudy.validation} />
        <ScreensBlock items={[screens[2]]} language={language} onPreview={setPreviewScreen} />

        <TextBlock title={language === "ru" ? "Результаты" : "Results"} items={localizedProject.caseStudy.results} />
        <TextBlock title={language === "ru" ? "Дополнительные инсайты" : "Additional Insights"} items={localizedProject.caseStudy.insights} />
        <TextBlock title={language === "ru" ? "Вывод" : "Conclusion"} items={localizedProject.caseStudy.conclusion} />
      </div>
      <ScreenPreview screen={previewScreen} language={language} onClose={() => setPreviewScreen(null)} />
    </>
  );
}

function TextBlock({ title, items, columns = false }: { title: string; items: string[]; columns?: boolean }) {
  return (
    <section className="border-t border-white/10 py-12">
      <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        <ul className={`grid gap-3 text-xl leading-8 text-white/70 ${columns ? "md:grid-cols-2" : ""}`}>
          {items.map((item) => (
            <li key={item} className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#ff6a3d]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ScreensBlock({ items, language, onPreview }: { items: (typeof screens)[number][]; language: Language; onPreview: (screen: PreviewScreen) => void }) {
  return (
    <section className="py-8">
      <div className="mx-auto flex w-full max-w-[74rem] flex-wrap justify-center gap-5">
        {items.map((item, index) => (
          <article key={item.key} className="relative w-full max-w-[58rem] overflow-hidden rounded-[1.5rem] bg-[#252525] p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,106,61,0.18),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
            <button
              type="button"
              onClick={() => onPreview({ label: item.label[language], src: item.src })}
              className="group relative block w-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/25 text-left shadow-[0_24px_70px_rgba(0,0,0,0.4)] outline-none transition duration-300 hover:-translate-y-1 hover:border-white/25 focus-visible:ring-2 focus-visible:ring-purple"
              aria-label={language === "ru" ? `Открыть превью: ${item.label[language]}` : `Open preview: ${item.label[language]}`}
            >
              <Image src={withBasePath(item.src)} alt={item.label[language]} width={1400} height={900} className="h-auto w-full object-cover" />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/30 group-hover:opacity-100 group-focus-visible:bg-black/30 group-focus-visible:opacity-100">
                <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black">{language === "ru" ? "Открыть" : "Open"}</span>
              </span>
            </button>
            <p className="relative mt-4 text-sm font-semibold leading-6 text-white/55">{item.label[language]}</p>
            <span className="absolute right-5 top-5 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur">
              {String(index + 1).padStart(2, "0")}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ScreenPreview({ screen, language, onClose }: { screen: PreviewScreen | null; language: Language; onClose: () => void }) {
  useEffect(() => {
    if (!screen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, screen]);

  if (!screen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/85 p-4 pt-24 backdrop-blur-sm sm:p-8 sm:pt-28"
      role="dialog"
      aria-modal="true"
      aria-label={screen.label}
      onClick={onClose}
    >
      <div className="relative flex max-h-full w-full max-w-6xl flex-col items-center" onClick={(event) => event.stopPropagation()}>
        <div className="relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
            aria-label={language === "ru" ? "Закрыть превью" : "Close preview"}
          >
            {language === "ru" ? "Закрыть" : "Close"}
          </button>
          <Image
            src={withBasePath(screen.src)}
            alt={screen.label}
            width={1800}
            height={1200}
            className="h-auto max-h-[calc(100vh-8rem)] w-auto max-w-[calc(100vw-2rem)] rounded-[1.5rem] border border-white/15 object-contain shadow-[0_30px_120px_rgba(0,0,0,0.65)] sm:max-h-[calc(100vh-10rem)] sm:max-w-[calc(100vw-4rem)]"
          />
        </div>
        <p className="mt-4 text-center text-sm font-semibold text-white/65">{screen.label}</p>
      </div>
    </div>
  );
}
