"use client";

import { MockProjectPreview } from "@/components/MockProjectPreview";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { RandomEmojiSet } from "@/components/RandomEmojiSet";
import { productProjects } from "@/data/projects";
import { useLanguage } from "@/lib/language";

const content = {
  ru: {
    hero: {
      before: "Я — Вадим Родберг, senior product designer с 7-летним опытом в",
      accent: "e-commerce, B2B и enterprise-продуктах",
    },
    companies: ["Слабаем!", "ROSSKO", "Базис Телеком", "Ароматный мир"],
    statement: {
      line1Before: "Проектирую",
      line1Accent1: "сложные сервисы",
      line1Middle: "продумываю",
      line1Accent2: "end-to-end flow",
      line1After: "и нахожу",
      line1Accent3: "edge-cases",
      line2Before: "Задаю",
      line2Accent1: "problem-solving",
      line2Middle: "вопросы, провожу",
      line2Accent2: "UX-исследования",
      line2After: "и развиваю продукты на основе метрик",
    },
    skillsTitle: "Навыки",
    casesTitle: "Продуктовые кейсы",
    experienceTitle: "Опыт",
    finalBefore: "Буду рад",
    finalAccent1: "работать",
    finalMiddle: "в",
    finalAccent2: "амбициозной",
    finalAfter: "команде",
    footerName: "Вадим Родберг, Senior Product Designer",
    footerMeta: "Russia, Санкт-Петербург · Русский — родной · English — A2",
    skills: [
      "Системный дизайн и UX-архитектура",
      "Сквозные пользовательские сценарии",
      "B2B и enterprise-сервисы",
      "UX Research / CustDev",
      "CJM, user flow, story mapping",
      "A/B-тестирование и продуктовые метрики",
      "UX-спецификации и документация",
      "Figma, Miro, Jira, Confluence",
    ],
    experience: [
      {
        role: "Старший продуктовый дизайнер (System Design & UX)",
        company: "ROSSKO",
        period: "Февраль 2024 — Май 2026",
        text: "Экосистема внутренних сервисов для автоматизации операционных и логистических процессов: «Честный Знак», ГИС ЭПД, AI-сервис на базе LLM, UX-спецификации и унификация паттернов.",
      },
      {
        role: "Основатель / продуктовый дизайнер / fullstack",
        company: "Слабаем!",
        period: "2020 — н.в.",
        text: "Собственный продукт: исследование рынка, UX, запуск, монетизация, SEO, воронки, аналитика и развитие на основе данных.",
      },
      {
        role: "Старший продуктовый дизайнер (UX / UI)",
        company: "Базис Телеком",
        period: "Август 2020 — Февраль 2024",
        text: "B2B-маркетплейс телекоммуникационного оборудования: CustDev, MVP с нуля, сценарии покупки, IA, UX-гипотезы, A/B-тесты и продуктовые метрики.",
      },
      {
        role: "Продуктовый дизайнер (UX / UI)",
        company: "Ароматный мир",
        period: "До 2020",
        text: "E-commerce: поиск, каталог, карточка товара, checkout, CJM, user flow, A/B-тестирование, анализ поведения и сопровождение релизов.",
      },
    ],
  },
  en: {
    hero: {
      before: "I’m Vadim Rodberg, a senior product designer with 7 years of experience in",
      accent: "e-commerce, B2B, and enterprise products",
    },
    companies: ["Slabaem!", "ROSSKO", "Bazis Telecom", "Aromatny Mir"],
    statement: {
      line1Before: "I design",
      line1Accent1: "complex services",
      line1Middle: "think through",
      line1Accent2: "end-to-end flows",
      line1After: "and find",
      line1Accent3: "edge cases",
      line2Before: "I ask",
      line2Accent1: "problem-solving",
      line2Middle: "questions, run",
      line2Accent2: "UX research",
      line2After: "and develop products based on metrics",
    },
    skillsTitle: "Skills",
    casesTitle: "Product cases",
    experienceTitle: "Experience",
    finalBefore: "I’ll be glad to",
    finalAccent1: "work",
    finalMiddle: "with an",
    finalAccent2: "ambitious",
    finalAfter: "team",
    footerName: "Vadim Rodberg, Senior Product Designer",
    footerMeta: "Russia, Saint Petersburg · Russian — native · English — A2",
    skills: [
      "System Design & UX Architecture",
      "End-to-end user flows",
      "B2B and enterprise services",
      "UX Research / CustDev",
      "CJM, User Flow, Story Mapping",
      "A/B Testing and product metrics",
      "UX specifications and documentation",
      "Figma, Miro, Jira, Confluence",
    ],
    experience: [
      {
        role: "Senior Product Designer (System Design & UX)",
        company: "ROSSKO",
        period: "February 2024 — May 2026",
        text: "An ecosystem of internal services for automating operational and logistics processes: Chestny ZNAK, GIS EPD, an LLM-based AI service, UX specifications, and pattern unification.",
      },
      {
        role: "Founder / Product Designer / Fullstack",
        company: "Slabaem!",
        period: "2020 — present",
        text: "Own product: market research, UX, launch, monetization, SEO, funnels, analytics, and data-informed development.",
      },
      {
        role: "Senior Product Designer (UX / UI)",
        company: "Bazis Telecom",
        period: "August 2020 — February 2024",
        text: "B2B marketplace for telecom equipment: CustDev, MVP from scratch, purchase scenarios, IA, UX hypotheses, A/B tests, and product metrics.",
      },
      {
        role: "Product Designer (UX / UI)",
        company: "Aromatny Mir",
        period: "Before 2020",
        text: "E-commerce: search, catalogue, product page, checkout, CJM, user flow, A/B testing, behavior analysis, and release support.",
      },
    ],
  },
};

const accentClassName = "inline align-baseline font-normal leading-[inherit] tracking-[inherit] text-[inherit] text-purple";

export default function Home() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main className="min-h-screen overflow-hidden text-[#f5f2ee]">
      <div className="relative z-10">
      <section className="relative min-h-screen px-5 pb-8 pt-28 sm:px-8 lg:px-12">
        <div className="relative z-10 min-h-[calc(100vh-9rem)]">
          <div className="max-w-[min(980px,70vw)] pt-12 sm:pt-16 lg:pt-20">
            <h1 className="text-[clamp(1.75rem,3.25vw,3.15rem)] font-medium leading-[1.14] tracking-[-0.018em]">
              {t.hero.before} <span className="inline align-baseline font-medium leading-[inherit] tracking-[inherit] text-[inherit] text-purple">{t.hero.accent}</span>
            </h1>
            <p className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-[clamp(1rem,1.2vw,1.25rem)] font-semibold text-white/35">
              {t.companies.map((company, index) => (
                <span key={company} className="opacity-60">
                  {index > 0 ? "· " : ""}{company}
                </span>
              ))}
            </p>
          </div>

          <div className="mt-12 w-full lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-auto">
            <ProjectCarousel projects={productProjects} />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1800px] px-6 py-14 sm:px-10 lg:px-14">
        <h2 className="relative z-10 max-w-[1120px] text-[clamp(1.55rem,2.85vw,2.7rem)] font-medium leading-[1.23] tracking-[-0.014em]">
          {t.statement.line1Before} <span className={accentClassName}>{t.statement.line1Accent1}</span>, {t.statement.line1Middle}{" "}
          <span className={accentClassName}>{t.statement.line1Accent2}</span> {t.statement.line1After} <span className={accentClassName}>{t.statement.line1Accent3}</span>
          <RandomEmojiSet seed="flow" />
          <br />
          <br />
          {t.statement.line2Before} <span className={accentClassName}>{t.statement.line2Accent1}</span> {t.statement.line2Middle}{" "}
          <span className={accentClassName}>{t.statement.line2Accent2}</span> {t.statement.line2After}
          <RandomEmojiSet seed="metrics" />
        </h2>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 py-16 sm:px-10 lg:px-14">
        <h2 className="mb-8 text-[clamp(1.6rem,2.45vw,2.35rem)] font-normal leading-none tracking-[-0.038em]">{t.skillsTitle}</h2>
        <div className="flex flex-wrap gap-3">
          {t.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/15 px-5 py-3 text-lg font-semibold text-white/68">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="product-cases" className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 lg:px-14">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="text-[clamp(1.6rem,2.45vw,2.4rem)] font-normal leading-none tracking-[-0.038em]">{t.casesTitle}</h2>
        </div>
        <div className="grid gap-7 lg:grid-cols-4">
          {productProjects.map((project) => (
            <MockProjectPreview key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 lg:px-14">
        <h2 className="mb-12 text-[clamp(1.6rem,2.45vw,2.4rem)] font-normal leading-none tracking-[-0.038em]">{t.experienceTitle}</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {t.experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="rounded-[1.75rem] bg-[#1d1d1d] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">{item.period}</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight">{item.role}</h3>
              <p className="mt-2 text-xl font-semibold text-white/50">{item.company}</p>
              <p className="mt-6 text-lg leading-8 text-white/62">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 lg:px-14">
        <h2 className="max-w-[980px] text-[clamp(1.75rem,3.25vw,3.15rem)] font-medium leading-[1.14] tracking-[-0.018em]">
          {t.finalBefore} <span className={accentClassName}>{t.finalAccent1}</span>
          <RandomEmojiSet seed="team" />
          <br />{t.finalMiddle} <span className={accentClassName}>{t.finalAccent2}</span> {t.finalAfter}
        </h2>
      </section>

      <footer className="mx-auto flex max-w-[1800px] flex-col gap-5 px-6 py-12 text-white/45 sm:px-10 lg:px-14">
        <p className="text-xl font-semibold text-white">{t.footerName}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg">
          <a className="transition hover:text-purple" href="mailto:vadimrodberg@gmail.com">
            vadimrodberg@gmail.com
          </a>
          <a className="transition hover:text-purple" href="tel:+79643371333">
            +7 964 337-13-33
          </a>
          <a className="transition hover:text-purple" href="https://t.me/VadimRodberg">
            Telegram
          </a>
        </div>
        <p>{t.footerMeta}</p>
      </footer>
      </div>
    </main>
  );
}
