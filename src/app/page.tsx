"use client";

import { MockProjectPreview } from "@/components/MockProjectPreview";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { RandomEmojiSet } from "@/components/RandomEmojiSet";
import { productProjects } from "@/data/projects";
import { useLanguage } from "@/lib/language";

const content = {
  ru: {
    hero: {
      before: "Я — Вадим Родберг, Senior Product Designer. 7 лет проектирую и развиваю",
      accent: "B2B, enterprise- и e-commerce-продукты",
    },
    companies: ["Слабаем!", "ROSSKO", "Базис Телеком", "Ароматный мир"],
    statement: {
      line1Before: "Проектирую",
      line1Accent1: "сложные продукты",
      line1Middle: "веду их",
      line1Accent2: "от discovery до запуска",
      line1After: "и развиваю",
      line1Accent3: "по метрикам",
      line2Before: "Влияю на",
      line2Accent1: "roadmap и приоритеты,",
      line2Middle: "синхронизирую",
      line2Accent2: "бизнес и команду",
      line2After: "и защищаю продуктовые решения",
    },
    skillsTitle: "Senior-функции",
    channel: {
      eyebrow: "Telegram-канал",
      title: "Пишу о UX и продуктовой логике",
      text: "Разбираю интерфейсные решения, которые кажутся мелочами, но влияют на весь продукт: поведение пользователей, метрики и бизнес. UX без магии и вкусовщины.",
      link: "Читать Rodberg Design",
    },
    casesTitle: "Продуктовые кейсы",
    experienceTitle: "Опыт",
    finalBefore: "Открыт к",
    finalAccent1: "роли Senior Product Designer",
    finalMiddle: "в",
    finalAccent2: "продуктовой",
    finalAfter: "команде",
    footerName: "Вадим Родберг, Senior Product Designer",
    footerMeta: "Россия, Санкт-Петербург · Русский — родной · Английский — A2",
    skills: [
      "Продуктовая стратегия и системный UX",
      "Влияние на roadmap, MVP и post-MVP",
      "Фасилитация решений между бизнесом и командой",
      "Защита решений перед руководством",
      "UX-архитектура и сквозные сценарии",
      "Исследования, эксперименты и метрики",
      "Менторство дизайнеров",
      "Спецификации и передача в разработку",
    ],
    experience: [
      {
        role: "Старший продуктовый дизайнер (System Design & UX)",
        company: "ROSSKO",
        period: "Февраль 2024 — Май 2026",
        text: "Проектировал системную логику внутренних сервисов: связывал бизнес-правила, роли, статусы, ошибки и ограничения в сквозные сценарии и спецификации для разработки.",
      },
      {
        role: "Основатель / Senior Product Designer / Full-stack",
        company: "Слабаем!",
        period: "2023 — настоящее время",
        text: "Развиваю собственный стартап от исследования рынка и продуктовой стратегии до UX, разработки, запуска, монетизации, SEO и аналитики.",
      },
      {
        role: "Старший продуктовый дизайнер (UX / UI)",
        company: "Базис Телеком",
        period: "Август 2020 — Февраль 2024",
        text: "Спроектировал с нуля три связанных пространства B2B-платформы, разделял MVP и post-MVP, проводил CustDev и связывал потребности покупателей, продавцов и внутренних команд.",
      },
      {
        role: "Продуктовый дизайнер (UX / UI)",
        company: "Ароматный мир",
        period: "Июнь 2019 — Август 2020",
        text: "Улучшал ключевые точки e-commerce-воронки через анализ поведения, UX-гипотезы и A/B-тесты; сопровождал решения до релиза и оценки результата.",
      },
    ],
  },
  en: {
    hero: {
      before: "I’m Vadim Rodberg, a Senior Product Designer. For 7 years, I have designed and developed",
      accent: "B2B, enterprise, and e-commerce products",
    },
    companies: ["Slabaem!", "ROSSKO", "Bazis Telecom", "Aromatny Mir"],
    statement: {
      line1Before: "I design",
      line1Accent1: "complex products",
      line1Middle: "taking them",
      line1Accent2: "from discovery to launch",
      line1After: "and improving them",
      line1Accent3: "through metrics",
      line2Before: "I influence",
      line2Accent1: "roadmaps and priorities,",
      line2Middle: "align",
      line2Accent2: "business and delivery teams",
      line2After: "and defend product decisions",
    },
    skillsTitle: "Senior responsibilities",
    channel: {
      eyebrow: "Telegram channel",
      title: "I write about UX and product logic",
      text: "I examine familiar interface decisions, UX anti-patterns, and their hidden consequences for users and businesses.",
      link: "Read Rodberg Design",
    },
    casesTitle: "Product cases",
    experienceTitle: "Experience",
    finalBefore: "Open to a",
    finalAccent1: "Senior Product Designer role",
    finalMiddle: "in a",
    finalAccent2: "product-led",
    finalAfter: "team",
    footerName: "Vadim Rodberg, Senior Product Designer",
    footerMeta: "Russia, Saint Petersburg · Russian — native · English — A2",
    skills: [
      "Product strategy and systems UX",
      "Roadmap, MVP, and post-MVP influence",
      "Cross-functional decision facilitation",
      "Executive stakeholder communication",
      "UX architecture and end-to-end flows",
      "Research, experiments, and metrics",
      "Designer mentoring",
      "Specifications and engineering handoff",
    ],
    experience: [
      {
        role: "Senior Product Designer (System Design & UX)",
        company: "ROSSKO",
        period: "February 2024 — May 2026",
        text: "Designed the system logic of internal services, connecting business rules, roles, states, errors, and constraints into end-to-end flows and engineering-ready specifications.",
      },
      {
        role: "Founder / Senior Product Designer / Full-stack",
        company: "Slabaem!",
        period: "2023 — Present",
        text: "Developing my own startup from market research and product strategy through UX, engineering, launch, monetization, SEO, and analytics.",
      },
      {
        role: "Senior Product Designer (UX / UI)",
        company: "Bazis Telecom",
        period: "August 2020 — February 2024",
        text: "Designed three connected B2B product spaces from scratch, scoped MVP and post-MVP work, ran CustDev, and aligned buyer, seller, and internal-team needs.",
      },
      {
        role: "Product Designer (UX / UI)",
        company: "Aromatny Mir",
        period: "June 2019 — August 2020",
        text: "Improved key e-commerce funnel decisions through behavior analysis, UX hypotheses, and A/B tests; supported solutions through release and impact review.",
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

      <section className="mx-auto max-w-[1800px] px-6 py-8 sm:px-10 lg:px-14">
        <a
          href="https://t.me/RodbergDesign"
          target="_blank"
          rel="noreferrer"
          className="group block rounded-[1.75rem] border border-white/10 bg-[#1d1d1d] p-7 transition hover:border-purple/50 hover:bg-[#242024] sm:p-9"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">{t.channel.eyebrow}</p>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h2 className="text-[clamp(1.6rem,2.45vw,2.35rem)] font-semibold leading-tight tracking-[-0.03em]">{t.channel.title}</h2>
              <p className="mt-4 text-lg leading-8 text-white/62">{t.channel.text}</p>
            </div>
            <span className="shrink-0 text-lg font-semibold text-white transition group-hover:text-purple">
              {t.channel.link} →
            </span>
          </div>
        </a>
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
