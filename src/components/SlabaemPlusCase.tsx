"use client";

import { useEffect, useState } from "react";
import type { SlabaemPlusBlock } from "@/data/slabaemPlusCase";
import { slabaemPlusCase } from "@/data/slabaemPlusCase";

const realScreens: Record<string, string> = {
  "Скрин 1: стартовый экран продукта и основной вход в сценарий поиска музыкантов.":
    "/screens/Скрин 1 главная страница или общий экран «Слабаем!»..png",
  "Скрин 2: лента объявлений, где пользователь быстро оценивает релевантные возможности.": "/screens/Скрин 2 лентакаталог объявлений..png",
  "Скрин 3: карточка объявления с деталями, которые помогают принять решение об отклике.": "/screens/Скрин 3 экран карточки объявления..png",
  "Скрин 4: экран тарифов, где ценность Plus объясняется через понятные преимущества.": "/screens/Скрин 4 экран тарифов.png",
  "Скрин 5: Plus-статус в интерфейсе как спокойное подтверждение активной подписки.":
    "/screens/Скрин 5 экран, где виден Plus-логотип или Plus-состояние пользователя..png",
  "Скрин 6: форма публикации во Free-версии с явным ограничением на 3 фото.":
    "/screens/Скрин 6 форма создания объявления у Free с лимитом фото 3..png",
  "Скрин 7: состояние лимита, которое показывает ограничение без агрессивного paywall.":
    "/screens/Скрин 7 экран с ограничением по количеству опубликованных объявлений..png",
  "Скрин 8: сохраненные поиски во Free-версии, где виден базовый лимит радаров.":
    "/screens/Скрин 8 экран сохраненных поисковрадаров у Free..png",
  "Скрин 9: экран подписки с честной подачей преимуществ без обещаний искусственного продвижения.":
    "/screens/Скрин 9 экран подписки с формулировкой преимуществ без обещаний топа.png",
  "Скрин 10: контекстный upsell, который предлагает Plus в момент реальной потребности.":
    "/screens/Скрин 10 пример спокойного upsell-сообщения в интерфейсе..png",
  "Скрин 11: обзор преимуществ Plus для активных пользователей сервиса.":
    "/screens/Скрин 11 обзор преимуществ Plus для активных пользователей сервиса.png",
  "Скрин 12: сравнение Free и Plus, которое помогает быстро понять разницу тарифов.":
    "/screens/Скрин 12 сравнение Free и Plus.png",
  "Скрин 13: активная Plus-подписка в интерфейсе как подтверждение оплаченного состояния.":
    "/screens/Скрин 13 активная Plus-подписка в интерфейсе как подтверждение оплаченного состояния.png",
  "Скрин 14: список объявлений во Free-версии, где пользователь приближается к лимиту.":
    "/screens/Скрин 14 список объявлений во Free-версии, где пользователь приближается к лимиту.png",
  "Скрин 15: ограничение на публикации объясняет причину блокировки следующего объявления.":
    "/screens/Скрин 15 ограничение на публикации объясняет причину блокировки следующего объявления.png",
  "Скрин 16: Plus снимает лимит и позволяет вести несколько поисков параллельно.":
    "/screens/Скрин 16 Plus снимает лимит и позволяет вести несколько поисков параллельно.png",
  "Скрин 17: счетчик фото во Free-версии заранее показывает доступный лимит.":
    "/screens/Скрин 17 счетчик фото во Free-версии заранее показывает доступный лимит.png",
  "Скрин 18: увеличенный лимит Plus помогает подробнее показать проект или инструмент.":
    "/screens/Скрин 18 увеличенный лимит Plus помогает подробнее показать проект или инструмент.png",
  "Скрин 19: объявление с большим количеством фото повышает доверие к автору.":
    "/screens/Скрин 19 объявление с большим количеством фото повышает доверие к автору.png",
  "Скрин 20: Free-интерфейс с рекламным блоком показывает источник визуального шума.":
    "/screens/Скрин 20 Free-интерфейс с рекламным блоком показывает источник визуального шума.png",
  "Скрин 21: Plus-версия убирает рекламу и делает частое использование спокойнее.":
    "/screens/Скрин 21 Plus-версия убирает рекламу и делает частое использование спокойнее.png",
  "Скрин 22: собственный закреп остается видимым, чтобы пользователь контролировал продвижение.":
    "/screens/Скрин 22 собственный закреп остается видимым, чтобы пользователь контролировал продвижение.png",
  "Скрин 23: Free-лимит на сохраненные поиски показывает базовые возможности радаров.":
    "/screens/Скрин 23 Free-лимит на сохраненные поиски показывает базовые возможности радаров.png",
  "Скрин 24: Plus расширяет количество радаров для нескольких параллельных запросов.":
    "/screens/Скрин 24 Plus расширяет количество радаров для нескольких параллельных запросов.png",
  "Скрин 25: digest-уведомление возвращает пользователя без необходимости вручную проверять сайт.":
    "/screens/Скрин 25 digest-уведомление возвращает пользователя без необходимости вручную проверять сайт.png",
  "Скрин 28: результат AI помогает быстрее получить заголовок и описание для редактирования.":
    "/screens/результат AI помогает быстрее получить заголовок и описание для редактирования.png",
  "Скрин 30: upsell появляется при лимите объявлений и связывает Plus с конкретной задачей.":
    "/screens/upsell появляется при лимите объявлений и связывает Plus с конкретной задачей.png",
  "Скрин 37: платежная воронка помогает найти потери между стартом оплаты и успешной покупкой.":
    "/screens/Скрин 37 платежная воронка помогает найти потери между стартом оплаты и успешной покупкой.png",
};

type PreviewScreen = {
  label: string;
  src: string;
};

function getDisplayLabel(label: string) {
  return label.replace(/^Скрин \d+:\s*/, "");
}

function RealScreen({ label, src, index, onPreview }: { label: string; src: string; index: number; onPreview: (screen: PreviewScreen) => void }) {
  const displayLabel = getDisplayLabel(label);

  return (
    <article className="relative overflow-hidden rounded-[1.5rem] bg-[#252525] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,47,167,0.16),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
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
      <p className="relative mt-4 text-sm font-semibold text-white/55">{displayLabel}</p>
      <span className="absolute right-5 top-5 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur">
        {String(index + 1).padStart(2, "0")}
      </span>
    </article>
  );
}

function MockScreen({ label, index }: { label: string; index: number }) {
  const displayLabel = getDisplayLabel(label);

  return (
    <article className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-[#252525] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,47,167,0.16),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
      <div className="relative mx-auto h-[280px] max-w-[180px] rounded-[1.75rem] border border-white/15 bg-[#f6f6f6] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
        <div className="mx-auto h-3 w-16 rounded-full bg-black" />
        <div className="mt-5 space-y-3">
          <div className="h-5 rounded bg-black/12" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-16 rounded-xl bg-purple" />
            <div className="h-16 rounded-xl bg-black/10" />
          </div>
          <div className="h-3 rounded bg-black/10" />
          <div className="h-3 w-2/3 rounded bg-black/10" />
          <div className="space-y-2 pt-2">
            <div className="h-8 rounded-xl bg-black/10" />
            <div className="h-8 rounded-xl bg-black/10" />
            <div className="h-8 rounded-xl bg-black/10" />
          </div>
        </div>
      </div>
      <p className="relative mt-4 text-sm font-semibold text-white/55">{displayLabel}</p>
      <span className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/55">
        {String(index + 1).padStart(2, "0")}
      </span>
    </article>
  );
}

function ScreensBlock({ items, onPreview }: { items: string[]; onPreview: (screen: PreviewScreen) => void }) {
  const isCentered = items.length < 3;

  return (
    <section className="py-8">
      <div className={isCentered ? "mx-auto flex w-full max-w-[72rem] flex-wrap justify-center gap-5" : "mx-auto grid w-full max-w-[72rem] gap-5 md:grid-cols-2 xl:grid-cols-3"}>
        {items.map((item, index) => (
          <div key={item} className={isCentered ? "w-full max-w-[30rem] md:w-1/3" : undefined}>
            {realScreens[item] ? <RealScreen label={item} src={realScreens[item]} index={index} onPreview={onPreview} /> : <MockScreen label={item} index={index} />}
          </div>
        ))}
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

function TextBlock({ block }: { block: Extract<SlabaemPlusBlock, { type: "section" }> }) {
  return (
    <section className="border-t border-white/10 py-12">
      <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{block.title}</h2>
        <div className="space-y-6 text-xl leading-8 text-white/70">
          {block.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {block.items ? (
            <ul className="grid gap-3">
              {block.items.map((item) => (
                <li key={item} className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-purple">
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

export function SlabaemPlusCase() {
  const [previewScreen, setPreviewScreen] = useState<PreviewScreen | null>(null);

  return (
    <>
      <div className="mx-auto max-w-[1800px] px-6 pb-24 pt-40 text-[#f5f2ee] sm:px-10 lg:px-14">
        {slabaemPlusCase.map((block, index) => {
          if (block.type === "intro") {
            return (
              <section key={`${block.type}-${index}`} className="pb-16">
                <p className="text-xl font-semibold text-white/45">{block.subtitle}</p>
                <h1 className="mt-5 max-w-5xl text-[1.8rem] font-normal leading-[1.06] tracking-[-0.04em] sm:text-[2.8rem]">
                  {block.title}
                </h1>
                <a
                  href="https://slabaem.space/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center rounded-full border border-white/15 bg-white/8 px-5 py-3 text-base font-semibold text-white/75 transition hover:border-purple/60 hover:bg-purple/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
                >
                  slabaem.space
                </a>
              </section>
            );
          }

          if (block.type === "screens") {
            return <ScreensBlock key={`${block.type}-${index}`} items={block.items} onPreview={setPreviewScreen} />;
          }

          return <TextBlock key={`${block.type}-${index}`} block={block} />;
        })}
      </div>
      <ScreenPreview screen={previewScreen} onClose={() => setPreviewScreen(null)} />
    </>
  );
}
