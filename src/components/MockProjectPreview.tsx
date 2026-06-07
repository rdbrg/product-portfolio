import Link from "next/link";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/language";

type MockProjectPreviewProps = {
  project: Project;
  size?: "hero" | "card" | "wide";
};

export function MockProjectPreview({ project, size = "card" }: MockProjectPreviewProps) {
  const { language } = useLanguage();
  const localizedProject = { ...project, ...(project.i18n?.[language] ?? {}) };
  const isHero = size === "hero";
  const isWide = size === "wide";
  const previewImage = project.previewImage ?? (project.slug === "slabaem-musicians-platform" ? "/screens/превью_слабаем.png" : null);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden rounded-[1.75rem] bg-[#2f2f2f] transition duration-300 hover:-translate-y-1 hover:bg-[#383838] ${
        isHero ? "aspect-[1.34/1] shadow-[0_26px_70px_rgba(0,0,0,0.42)]" : isWide ? "aspect-[1.8/1]" : "aspect-[1.25/1]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
      <div className="absolute left-5 top-5 z-10 flex gap-2 text-xs text-white/55">
        <span>{localizedProject.company}</span>
        <span>/</span>
        <span>{localizedProject.industry}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-[#2f2f2f] via-[#2f2f2f]/92 to-transparent" />
      <div className={`absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-5 ${isHero ? "sm:p-7" : ""}`}>
        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{localizedProject.shortTitle}</h3>
        <p className="shrink-0 text-right text-sm font-semibold text-white/50">{project.year}</p>
      </div>

      {previewImage ? (
        <div className="absolute inset-0 flex items-center justify-center px-7 pb-24 pt-14">
          <img
            src={previewImage}
            alt={language === "ru" ? `Превью кейса ${localizedProject.shortTitle}` : `${localizedProject.shortTitle} case preview`}
            className={`rounded-[1.25rem] border border-white/12 shadow-[0_22px_60px_rgba(0,0,0,0.46)] transition duration-500 group-hover:scale-[1.03] ${
              project.slug === "rossko-enterprise-services"
                ? "h-full w-full object-cover object-center"
                : "h-full w-full object-cover object-top"
            }`}
          />
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
      <div className="absolute inset-0 opacity-0 transition group-hover:bg-black/15 group-hover:opacity-100" />
    </Link>
  );
}
