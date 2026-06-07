"use client";

import { BasisTelecomCase } from "@/components/BasisTelecomCase";
import { AromatnyMirCase } from "@/components/AromatnyMirCase";
import { CaseSection } from "@/components/CaseSection";
import { MockScreensGrid } from "@/components/MockScreensGrid";
import { OtherProductCases } from "@/components/OtherProductCases";
import { SlabaemPlusCase } from "@/components/SlabaemPlusCase";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/language";

type ProjectPageClientProps = {
  project: Project;
};

export function ProjectPageClient({ project }: ProjectPageClientProps) {
  const { language } = useLanguage();
  const localizedProject = { ...project, ...(project.i18n?.[language] ?? {}) };

  if (project.slug === "slabaem-musicians-platform") {
    return (
      <main className="min-h-screen text-[#f5f2ee]">
        <div className="relative z-10">
        <ProjectHeader project={project} localizedProject={localizedProject} />
        <SlabaemPlusCase />
        <OtherProductCases currentSlug={project.slug} />
        </div>
      </main>
    );
  }

  if (project.slug === "basis-telecom-marketplace") {
    return (
      <main className="min-h-screen text-[#f5f2ee]">
        <div className="relative z-10">
        <ProjectHeader project={project} localizedProject={localizedProject} />
        <BasisTelecomCase />
        <OtherProductCases currentSlug={project.slug} />
        </div>
      </main>
    );
  }

  if (project.slug === "aromatny-mir-ecommerce") {
    return (
      <main className="min-h-screen text-[#f5f2ee]">
        <div className="relative z-10">
        <ProjectHeader project={project} localizedProject={localizedProject} />
        <AromatnyMirCase project={project} />
        <OtherProductCases currentSlug={project.slug} />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-[#f5f2ee]">
      <div className="relative z-10">
      <ProjectHeader project={project} localizedProject={localizedProject} />

      <section className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-14">
        <MockScreensGrid project={localizedProject} />
      </section>

      <section className="mx-auto max-w-[1800px] px-6 pb-24 sm:px-10 lg:px-14">
        <CaseSection title={language === "ru" ? "Контекст" : "Context"} items={localizedProject.caseStudy.context} />
        <CaseSection title={language === "ru" ? "Роль" : "Role"} items={localizedProject.caseStudy.role} columns />
        <CaseSection title={language === "ru" ? "Проблема со стороны пользователей" : "User Problem"} items={localizedProject.caseStudy.problemUser} />
        <CaseSection title={language === "ru" ? "Проблема со стороны бизнеса" : "Business Problem"} items={localizedProject.caseStudy.problemBusiness} />
        <CaseSection title={language === "ru" ? "Исследования и инсайты" : "Research and Insights"} items={localizedProject.caseStudy.research} />
        <CaseSection title={language === "ru" ? "Гипотеза" : "Hypothesis"} items={localizedProject.caseStudy.hypothesis} />
        <CaseSection title={language === "ru" ? "Решение" : "Solution"} items={localizedProject.caseStudy.solution} columns />
        <CaseSection title={language === "ru" ? "Проверка" : "Validation"} items={localizedProject.caseStudy.validation} />
        <CaseSection title={language === "ru" ? "Результаты" : "Results"} items={localizedProject.caseStudy.results} />
        <CaseSection title={language === "ru" ? "Дополнительные инсайты" : "Additional Insights"} items={localizedProject.caseStudy.insights} />
        <CaseSection title={language === "ru" ? "Вывод" : "Conclusion"} items={localizedProject.caseStudy.conclusion} />
      </section>
      <OtherProductCases currentSlug={project.slug} />
      </div>
    </main>
  );
}

function ProjectHeader({ project, localizedProject }: { project: Project; localizedProject: Project }) {
  return (
    <section className="mx-auto max-w-[1800px] px-6 pb-14 pt-40 sm:px-10 lg:px-14">
      <div className="flex flex-wrap gap-3 text-lg font-semibold text-white/45">
        <span>{localizedProject.company}</span>
        <span>·</span>
        <span>{localizedProject.industry}</span>
        <span>·</span>
        <span>{project.year}</span>
      </div>

      <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <h1 className="max-w-6xl text-[1.6rem] font-normal leading-[1.06] tracking-[-0.04em] sm:text-[2.35rem]">
          {localizedProject.title}
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
        {localizedProject.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/60">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
