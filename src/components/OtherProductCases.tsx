"use client";

import { MockProjectPreview } from "@/components/MockProjectPreview";
import { productProjects } from "@/data/projects";
import { useLanguage } from "@/lib/language";

type OtherProductCasesProps = {
  currentSlug: string;
};

export function OtherProductCases({ currentSlug }: OtherProductCasesProps) {
  const { language } = useLanguage();
  const otherProjects = productProjects.filter((project) => project.slug !== currentSlug);

  if (!otherProjects.length) {
    return null;
  }

  return (
    <section className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 lg:px-14">
      <div className="mb-12 flex items-end justify-between gap-6">
        <h2 className="text-[clamp(1.6rem,2.45vw,2.4rem)] font-normal leading-none tracking-[-0.038em]">{language === "ru" ? "Другие продуктовые кейсы" : "Other product cases"}</h2>
      </div>
      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {otherProjects.map((project) => (
          <MockProjectPreview key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
