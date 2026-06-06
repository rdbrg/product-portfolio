"use client";

import { useEffect, useState } from "react";
import { MockProjectPreview } from "@/components/MockProjectPreview";
import type { Project } from "@/data/projects";

type ProjectCarouselProps = {
  projects: Project[];
};

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    if (projects.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 1500);

    return () => window.clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="w-[min(78vw,560px)]">
      <div key={activeProject.slug} className="animate-[fadeIn_420ms_ease-out]">
        <MockProjectPreview project={activeProject} size="hero" />
      </div>
      <div className="mt-4 flex justify-end gap-2">
        {projects.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            aria-label={`Показать проект ${project.shortTitle}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-8 bg-purple" : "w-2 bg-white/25 hover:bg-white/45"}`}
          />
        ))}
      </div>
    </div>
  );
}
