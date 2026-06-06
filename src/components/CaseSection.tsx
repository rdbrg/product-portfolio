type CaseSectionProps = {
  title: string;
  items: string[];
  columns?: boolean;
};

export function CaseSection({ title, items, columns = false }: CaseSectionProps) {
  return (
    <section className="border-t border-white/10 py-14">
      <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        <ul className={`grid gap-4 text-xl leading-8 text-white/68 ${columns ? "md:grid-cols-2" : ""}`}>
          {items.map((item) => (
            <li key={item} className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-purple">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
