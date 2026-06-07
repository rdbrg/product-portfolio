import { notFound } from "next/navigation";
import { ProjectPageClient } from "@/components/ProjectPageClient";
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

  return <ProjectPageClient project={project} />;
}
