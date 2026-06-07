import { notFound } from "next/navigation";
import { CaseSection } from "@/components/CaseSection";
import { MockScreensGrid } from "@/components/MockScreensGrid";
import { OtherProductCases } from "@/components/OtherProductCases";
import { SlabaemPlusCase } from "@/components/SlabaemPlusCase";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: "Кейс не найден",
    };
  }

  return {
    title: `${project.title} | Product case`,
    description: project.problem,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  if (project.slug === "slabaem-musicians-platform") {
    return (
      <main className="min-h-screen text-[#f5f2ee]">
        <div className="relative z-10">
        <section className="mx-auto max-w-[1800px] px-6 pb-14 pt-40 sm:px-10 lg:px-14">
          <div className="flex flex-wrap gap-3 text-lg font-semibold text-white/45">
            <span>{project.company}</span>
            <span>·</span>
            <span>{project.industry}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <h1 className="max-w-6xl text-[1.6rem] font-normal leading-[1.06] tracking-[-0.04em] sm:text-[2.35rem]">
              {project.title}
            </h1>

            {project.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/8 px-5 py-3 text-base font-semibold text-white/75 transition hover:border-purple/60 hover:bg-purple/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple lg:mt-1"
              >
                {new URL(project.website).hostname.replace(/^www\./, "")}
              </a>
            ) : null}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/60">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <SlabaemPlusCase />
        <OtherProductCases currentSlug={project.slug} />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-[#f5f2ee]">
      <div className="relative z-10">
      <section className="mx-auto max-w-[1800px] px-6 pb-14 pt-40 sm:px-10 lg:px-14">
        <div className="flex flex-wrap gap-3 text-lg font-semibold text-white/45">
          <span>{project.company}</span>
          <span>·</span>
          <span>{project.industry}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>

        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <h1 className="max-w-6xl text-[1.6rem] font-normal leading-[1.06] tracking-[-0.04em] sm:text-[2.35rem]">
            {project.title}
          </h1>

          {project.website ? (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/8 px-5 py-3 text-base font-semibold text-white/75 transition hover:border-purple/60 hover:bg-purple/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple lg:mt-1"
            >
              {new URL(project.website).hostname.replace(/^www\./, "")}
            </a>
          ) : null}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/60">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-14">
        <MockScreensGrid project={project} />
      </section>

      <section className="mx-auto max-w-[1800px] px-6 pb-24 sm:px-10 lg:px-14">
        <CaseSection title="Контекст" items={project.caseStudy.context} />
        <CaseSection title="Роль" items={project.caseStudy.role} columns />
        <CaseSection title="Проблема со стороны пользователей" items={project.caseStudy.problemUser} />
        <CaseSection title="Проблема со стороны бизнеса" items={project.caseStudy.problemBusiness} />
        <CaseSection title="Исследования и инсайты" items={project.caseStudy.research} />
        <CaseSection title="Гипотеза" items={project.caseStudy.hypothesis} />
        <CaseSection title="Решение" items={project.caseStudy.solution} columns />
        <CaseSection title="Проверка" items={project.caseStudy.validation} />
        <CaseSection title="Результаты" items={project.caseStudy.results} />
        <CaseSection title="Дополнительные инсайты" items={project.caseStudy.insights} />
        <CaseSection title="Вывод" items={project.caseStudy.conclusion} />
      </section>
      <OtherProductCases currentSlug={project.slug} />
      </div>
    </main>
  );
}
