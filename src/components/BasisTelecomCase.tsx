"use client";

import { useEffect, useState } from "react";
import type { BasisTelecomBlock, BasisTelecomScreen } from "@/data/basisTelecomCase";
import { basisTelecomCase, basisTelecomCaseEn } from "@/data/basisTelecomCase";
import type { Language } from "@/lib/language";
import { useLanguage } from "@/lib/language";

const realScreens: Record<string, string> = {
  home: "/screens/bazis/Главная страница.png",
  search: "/screens/bazis/Страница поиска.png",
  product: "/screens/bazis/Страница товара.png",
  buyerAccount: "/screens/bazis/Личный кабинет покупателя.png",
  orders: "/screens/bazis/Страница заказов.png",
  checkout: "/screens/bazis/Оформление заказа.png",
  backofficeProducts: "/screens/bazis/Страница с товарами.png",
  addProduct: "/screens/bazis/Добавление товара.png",
  buyerCompany: "/screens/bazis/Карточка компании покупателя.png",
  activeOrders: "/screens/bazis/Активные заказы.png",
  moderation: "/screens/bazis/Заявки на модерацию.png",
  contentFilters: "/screens/bazis/Фильтры для работы с контентом.png",
  factoryCoefficients: "/screens/bazis/Настройка коэффециентов фабрик.png",
  sellerProducts: "/screens/bazis/Список заведенных товаров.png",
  productImport: "/screens/bazis/Импорт товаров из файла.png",
  finances: "/screens/bazis/Финансы, выписки.png",
  documents: "/screens/bazis/Работа с документооборотом.png",
  salesStats: "/screens/bazis/Статистика по продажам.png",
  auctions: "/screens/bazis/Система участия в аукционах.png",
  reviews: "/screens/bazis/Работа с отзывами покупателей.png",
  shipments: "/screens/bazis/Управление отправками.png",
  ads: "/screens/bazis/Рекламный кабинет продавца.png",
  knowledgePortal: "/screens/knowlegeportal/обучающий портал.png",
};

type PreviewScreen = {
  label: string;
  src: string;
};

function getDisplayLabel(label: string) {
  return label;
}

function RealScreen({ label, src, index, onPreview }: { label: string; src: string; index: number; onPreview: (screen: PreviewScreen) => void }) {
  const displayLabel = getDisplayLabel(label);

  return (
    <article className="relative overflow-hidden rounded-[1.5rem] bg-[#252525] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(95,124,255,0.18),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
      <button
        type="button"
        onClick={() => onPreview({ label, src })}
        className="group relative block w-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/25 text-left shadow-[0_24px_70px_rgba(0,0,0,0.4)] outline-none transition duration-300 hover:-translate-y-1 hover:border-white/25 focus-visible:ring-2 focus-visible:ring-purple"
        aria-label={`Открыть превью: ${displayLabel}`}
      >
        <img src={src} alt={displayLabel} className="h-auto w-full object-cover" />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/30 group-hover:opacity-100 group-focus-visible:bg-black/30 group-focus-visible:opacity-100">
          <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black">Открыть</span>
        </span>
      </button>
      <p className="relative mt-4 text-sm font-semibold leading-6 text-white/55">{displayLabel}</p>
      <span className="absolute right-5 top-5 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur">
        {String(index + 1).padStart(2, "0")}
      </span>
    </article>
  );
}

function ScreensBlock({ items, language, onPreview }: { items: BasisTelecomScreen[]; language: Language; onPreview: (screen: PreviewScreen) => void }) {
  const isCentered = items.length < 3;

  return (
    <section className="py-8">
      <div className={isCentered ? "mx-auto flex w-full max-w-[72rem] flex-wrap justify-center gap-5" : "mx-auto grid w-full max-w-[72rem] gap-5 md:grid-cols-2 xl:grid-cols-3"}>
        {items.map((item, index) => {
          const src = realScreens[item.key];

          if (!src) {
            return null;
          }

          return (
            <div key={item.key} className={isCentered ? "w-full max-w-[42rem]" : undefined}>
              <RealScreen label={item.label[language]} src={src} index={index} onPreview={onPreview} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ScreenPreview({ screen, onClose }: { screen: PreviewScreen | null; onClose: () => void }) {
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

  const displayLabel = getDisplayLabel(screen.label);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/85 p-4 pt-24 backdrop-blur-sm sm:p-8 sm:pt-28"
      role="dialog"
      aria-modal="true"
      aria-label={displayLabel}
      onClick={onClose}
    >
      <div className="relative flex max-h-full w-full max-w-6xl flex-col items-center" onClick={(event) => event.stopPropagation()}>
        <div className="relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
            aria-label="Закрыть превью"
          >
            Закрыть
          </button>
          <img
            src={screen.src}
            alt={displayLabel}
            className="h-auto max-h-[calc(100vh-8rem)] w-auto max-w-[calc(100vw-2rem)] rounded-[1.5rem] border border-white/15 object-contain shadow-[0_30px_120px_rgba(0,0,0,0.65)] sm:max-h-[calc(100vh-10rem)] sm:max-w-[calc(100vw-4rem)]"
          />
        </div>
        <p className="mt-4 text-center text-sm font-semibold text-white/65">{displayLabel}</p>
      </div>
    </div>
  );
}

function TextBlock({ block }: { block: Extract<BasisTelecomBlock, { type: "section" }> }) {
  return (
    <section className="border-t border-white/10 py-12">
      <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{block.title}</h2>
        <div className="space-y-6 text-xl leading-8 text-white/70">
          {block.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {block.items ? (
            <ul className="grid gap-3">
              {block.items.map((item) => (
                <li key={item} className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#5f7cff]">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function BasisTelecomCase() {
  const { language } = useLanguage();
  const [previewScreen, setPreviewScreen] = useState<PreviewScreen | null>(null);
  const blocks = language === "ru" ? basisTelecomCase : basisTelecomCaseEn;

  return (
    <>
      <div className="mx-auto max-w-[1800px] px-6 pb-24 pt-40 text-[#f5f2ee] sm:px-10 lg:px-14">
        {blocks.map((block, index) => {
          if (block.type === "intro") {
            return (
              <section key={`${block.type}-${index}`} className="pb-16">
                <p className="text-xl font-semibold text-white/45">{block.subtitle}</p>
                <h1 className="mt-5 max-w-5xl text-[1.8rem] font-normal leading-[1.06] tracking-[-0.04em] sm:text-[2.8rem]">
                  {block.title}
                </h1>
              </section>
            );
          }

          if (block.type === "screens") {
            return <ScreensBlock key={`${block.type}-${index}`} items={block.items} language={language} onPreview={setPreviewScreen} />;
          }

          return <TextBlock key={`${block.type}-${index}`} block={block} />;
        })}
      </div>
      <ScreenPreview screen={previewScreen} onClose={() => setPreviewScreen(null)} />
    </>
  );
}
