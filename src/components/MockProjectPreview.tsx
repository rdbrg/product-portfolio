import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/language";
import { withBasePath } from "@/lib/paths";

type MockProjectPreviewProps = {
  project: Project;
  size?: "hero" | "card" | "wide";
};

const HOVER_LABELS: Record<string, { ru: string; en: string }> = {
  "rossko-enterprise-services": {
    ru: "Системный enterprise UX",
    en: "Enterprise systems UX",
  },
  "slabaem-musicians-platform": {
    ru: "Монетизация стартапа",
    en: "Startup monetization",
  },
  "basis-telecom-marketplace": {
    ru: "B2B-маркетплейс с нуля",
    en: "B2B marketplace from scratch",
  },
  "aromatny-mir-ecommerce": {
    ru: "Рост e-commerce конверсии",
    en: "E-commerce conversion growth",
  },
};

export function MockProjectPreview({ project, size = "card" }: MockProjectPreviewProps) {
  const { language } = useLanguage();
  const localizedProject = { ...project, ...(project.i18n?.[language] ?? {}) };
  const isHero = size === "hero";
  const isWide = size === "wide";
  const previewImage = project.previewImage ?? (project.slug === "slabaem-musicians-platform" ? "/screens/превью_слабаем.png" : null);
  const hoverLabel = HOVER_LABELS[project.slug]?.[language];

  return (
      <Link
        href={`/projects/${project.slug}`}
        className={`group relative block overflow-hidden rounded-[1.75rem] bg-[#2f2f2f] transition duration-300 hover:-translate-y-1 hover:bg-[#383838] ${
        isHero ? "aspect-[1.34/1] shadow-[0_26px_70px_rgba(0,0,0,0.42)]" : "aspect-[1.25/1]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />

      {previewImage ? (
        <div className="absolute inset-0 transition duration-500 group-hover:blur-[3px] group-focus-visible:blur-[3px]">
          <div className="relative h-full w-full">
            <Image
              src={withBasePath(previewImage)}
              alt={language === "ru" ? `Превью кейса ${localizedProject.shortTitle}` : `${localizedProject.shortTitle} case preview`}
              fill
              sizes="(max-width: 1024px) 78vw, 560px"
              className={`object-cover transition duration-500 group-hover:scale-[1.03] ${
                project.slug === "rossko-enterprise-services" ? "object-center" : "object-top"
              }`}
            />
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center gap-5 px-8 pt-10">
          {Array.from({ length: project.screens }).map((_, index) => (
            <div
              key={index}
              className={`relative rounded-[1.25rem] border border-white/12 bg-[#f4f4f4] shadow-[0_18px_45px_rgba(0,0,0,0.42)] ${
                isHero || isWide ? "h-[58%] w-[28%]" : "h-[68%] w-[24%]"
              } ${index === 0 && project.screens > 1 ? "-rotate-1" : ""} ${index === 2 ? "rotate-1" : ""}`}
            >
              <div className="mx-auto mt-2 h-2 w-12 rounded-full bg-black" />
              <div className="space-y-2 p-3">
                <div className="h-4 rounded bg-black/10" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-12 rounded-lg" style={{ background: project.accent }} />
                  <div className="h-12 rounded-lg bg-black/10" />
                </div>
                <div className="h-3 rounded bg-black/10" />
                <div className="h-3 w-2/3 rounded bg-black/10" />
                <div className="mt-3 grid gap-1.5">
                  <div className="h-7 rounded-lg bg-black/10" />
                  <div className="h-7 rounded-lg bg-black/10" />
                  <div className="h-7 rounded-lg bg-black/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="absolute inset-0 z-20 bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/55 group-hover:opacity-100 group-focus-visible:bg-black/55 group-focus-visible:opacity-100" />
      {hoverLabel ? (
        <div className="pointer-events-none absolute inset-6 z-30 flex items-center justify-center text-center opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <p className="text-xl font-semibold leading-tight tracking-[-0.02em] text-white drop-shadow-lg sm:text-2xl">
            {hoverLabel}
          </p>
        </div>
      ) : null}
    </Link>
  );
}
