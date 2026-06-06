type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
    </div>
  );
}
