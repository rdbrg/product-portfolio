import { MockProjectPreview } from "@/components/MockProjectPreview";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { RandomEmojiSet } from "@/components/RandomEmojiSet";
import { productProjects } from "@/data/projects";

const skills = [
  "System Design & UX Architecture",
  "End-to-end user flows",
  "B2B и enterprise-сервисы",
  "UX Research / CustDev",
  "CJM, User Flow, Story Mapping",
  "A/B Testing и продуктовые метрики",
  "UX-спецификации и документация",
  "Figma, Miro, Jira, Confluence",
];

const experience = [
  {
    role: "Senior Product Designer (System Design & UX)",
    company: "ROSSKO",
    period: "Февраль 2024 — Май 2026",
    text: "Экосистема внутренних сервисов для автоматизации операционных и логистических процессов: «Честный Знак», ГИС ЭПД, AI-сервис на базе LLM, UX-спецификации и унификация паттернов.",
  },
  {
    role: "Senior Product Designer (UX / UI)",
    company: "Слабаем!",
    period: "2020 — н.в.",
    text: "Собственный продукт: исследование рынка, UX, запуск, монетизация, SEO, воронки, аналитика и развитие на основе данных.",
  },
  {
    role: "Product Designer",
    company: "Базис Телеком",
    period: "Август 2020 — Февраль 2024",
    text: "B2B-маркетплейс телекоммуникационного оборудования: CustDev, MVP с нуля, сценарии покупки, IA, UX-гипотезы, A/B-тесты и продуктовые метрики.",
  },
  {
    role: "Founder / Product Designer / Fullstack",
    company: "Ароматный мир",
    period: "До 2020",
    text: "E-commerce: поиск, каталог, карточка товара, checkout, CJM, user flow, A/B-тестирование, анализ поведения и сопровождение релизов.",
  },
];

const accentClassName = "inline align-baseline font-normal leading-[inherit] tracking-[inherit] text-[inherit] text-purple";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-[#f5f2ee]">
      <div className="relative z-10">
      <section className="relative min-h-screen px-5 pb-8 pt-28 sm:px-8 lg:px-12">
        <div className="relative z-10 min-h-[calc(100vh-9rem)]">
          <div className="max-w-[min(980px,70vw)] pt-12 sm:pt-16 lg:pt-20">
            <h1 className="text-[clamp(1.75rem,3.25vw,3.15rem)] font-medium leading-[1.14] tracking-[-0.018em]">
              Я — Вадим Родберг, senior product designer с 7-летним опытом в{" "}
              <span className="inline align-baseline font-medium leading-[inherit] tracking-[inherit] text-[inherit] text-purple">
                e-commerce, B2B и enterprise-продуктах
              </span>
            </h1>
            <p className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-[clamp(1rem,1.2vw,1.25rem)] font-semibold text-white/35">
              <span className="opacity-90">Слабаем!</span>
              <span className="opacity-65">·</span>
              <span className="opacity-65">ROSSKO</span>
              <span className="opacity-65">·</span>
              <span className="opacity-65">Базис Телеком</span>
              <span className="opacity-65">·</span>
              <span className="opacity-65">Ароматный мир</span>
            </p>
          </div>

          <div className="mt-12 w-full lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-auto">
            <ProjectCarousel projects={productProjects} />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1800px] px-6 py-14 sm:px-10 lg:px-14">
        <h2 className="relative z-10 max-w-[1120px] text-[clamp(1.55rem,2.85vw,2.7rem)] font-medium leading-[1.23] tracking-[-0.014em]">
          Проектирую <span className={accentClassName}>сложные сервисы</span>, продумываю{" "}
          <span className={accentClassName}>end-to-end flow</span> и нахожу <span className={accentClassName}>edge-cases</span>
          <RandomEmojiSet seed="flow" />
          <br />
          <br />
          Задаю <span className={accentClassName}>problem-solving</span> вопросы, провожу{" "}
          <span className={accentClassName}>UX-исследования</span> и развиваю продукты на основе метрик
          <RandomEmojiSet seed="metrics" />
        </h2>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 py-16 sm:px-10 lg:px-14">
        <h2 className="mb-8 text-[clamp(1.6rem,2.45vw,2.35rem)] font-normal leading-none tracking-[-0.038em]">Навыки</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/15 px-5 py-3 text-lg font-semibold text-white/68">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="product-cases" className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 lg:px-14">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="text-[clamp(1.6rem,2.45vw,2.4rem)] font-normal leading-none tracking-[-0.038em]">Продуктовые кейсы</h2>
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          {productProjects.map((project) => (
            <MockProjectPreview key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 lg:px-14">
        <h2 className="mb-12 text-[clamp(1.6rem,2.45vw,2.4rem)] font-normal leading-none tracking-[-0.038em]">Опыт</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {experience.map((item) => (
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
          Буду рад <span className={accentClassName}>работать</span>
          <RandomEmojiSet seed="team" />
          <br />в <span className={accentClassName}>амбициозной</span> команде
        </h2>
      </section>

      <footer className="mx-auto flex max-w-[1800px] flex-col gap-5 px-6 py-12 text-white/45 sm:px-10 lg:px-14">
        <p className="text-xl font-semibold text-white">Вадим Родберг, Senior Product Designer</p>
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
        <p>Russia, Санкт-Петербург · Русский — родной · English — A2</p>
      </footer>
      </div>
    </main>
  );
}
