const tags = ["Product Strategy", "Systems UX", "Research", "Product Metrics"];

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Senior Product Designer
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">
          Проектирую и развиваю сложные цифровые продукты
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
          Веду продукт от исследований и архитектуры до запуска и оценки результата. Влияю на
          приоритеты, синхронизирую бизнес и команду и защищаю продуктовые решения.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-accent"
          >
            Смотреть проекты
          </a>
          <a
            href="#approach"
            className="inline-flex justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink"
          >
            Как я работаю
          </a>
        </div>
      </div>

      <aside className="rounded-[2rem] border border-line bg-white/45 p-6 shadow-soft lg:self-end">
        <p className="text-sm leading-6 text-muted">
          В центре моей работы — продуктовая логика, сложные сценарии, ограничения и решения,
          которые можно обосновать перед бизнесом и командой.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line bg-paper px-3 py-2 text-xs font-medium text-ink">
              {tag}
            </span>
          ))}
        </div>
      </aside>
    </section>
  );
}
