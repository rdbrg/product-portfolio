"use client";

import type { Project } from "@/data/projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language";

type ArtifactType = NonNullable<Project["artifacts"]>[number]["type"];

type MockScreensGridProps = {
  project: Project;
};

export function MockScreensGrid({ project }: MockScreensGridProps) {
  const [previewImage, setPreviewImage] = useState<{ title: string; src: string } | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    if (!previewImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewImage]);

  if (project.artifacts?.length) {
    return (
      <>
      <section className="py-12">
        {project.screensIntro ? <p className="mb-7 max-w-4xl text-lg leading-8 text-white/58">{project.screensIntro}</p> : null}
        <div className="grid w-full gap-4 md:grid-cols-2">
          {project.artifacts.map((artifact) => {
            const localizedArtifact = { ...artifact, ...(artifact.i18n?.[language] ?? {}) };

            return (
            <div key={artifact.title} className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] bg-[#2d2d2d] p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(214,92,255,0.2),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.07),transparent)]" />
              <div className="relative rounded-[1.35rem] border border-white/12 bg-[#f4f0ea] p-5 text-[#1f1f1f] shadow-[0_22px_60px_rgba(0,0,0,0.4)]">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/45">{artifact.type.replace("-", " ")}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{localizedArtifact.title}</h3>
                  </div>
                  <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-white">ROSSKO</span>
                </div>
                 <p className="text-sm font-semibold leading-5 text-black/55">{localizedArtifact.subtitle}</p>
                {artifact.image ? (
                  <button
                    type="button"
                    onClick={() => setPreviewImage({ title: localizedArtifact.title, src: artifact.image! })}
                    className="group relative mt-6 block w-full overflow-hidden rounded-xl border border-black/10 bg-white text-left outline-none transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)] focus-visible:ring-2 focus-visible:ring-purple"
                    aria-label={language === "ru" ? `Открыть превью: ${localizedArtifact.title}` : `Open preview: ${localizedArtifact.title}`}
                  >
                    <Image
                      src={artifact.image}
                      alt={localizedArtifact.title}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-contain"
                    />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/25 group-hover:opacity-100 group-focus-visible:bg-black/25 group-focus-visible:opacity-100">
                      <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black">{language === "ru" ? "Открыть" : "Open"}</span>
                    </span>
                  </button>
                ) : (
                  <ArtifactMock type={artifact.type} accent={project.accent} />
                )}
              </div>
              <p className="relative mt-5 text-center text-sm font-semibold text-white/45">{localizedArtifact.caption}</p>
            </div>
            );
          })}
        </div>
      </section>
      <ImagePreview preview={previewImage} onClose={() => setPreviewImage(null)} />
      </>
    );
  }

  return (
    <section className="py-12">
      <div className="grid gap-6 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] bg-[#2d2d2d] p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.08),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.07),transparent)]" />

            <div className="relative mx-auto h-[360px] max-w-[210px] rounded-[2rem] border border-white/15 bg-[#f7f7f7] p-3 shadow-[0_22px_60px_rgba(0,0,0,0.4)]">
              <div className="mx-auto h-4 w-20 rounded-full bg-black" />
              <div className="mt-5 space-y-3">
                <div className="h-5 rounded bg-black/12" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-20 rounded-xl" style={{ background: project.accent }} />
                  <div className="h-20 rounded-xl bg-black/10" />
                </div>
                <div className="h-4 rounded bg-black/10" />
                <div className="h-4 w-2/3 rounded bg-black/10" />
                <div className="space-y-2 pt-3">
                  <div className="h-10 rounded-xl bg-black/10" />
                  <div className="h-10 rounded-xl bg-black/10" />
                  <div className="h-10 rounded-xl bg-black/10" />
                </div>
              </div>
            </div>
            <p className="relative mt-5 text-center text-sm font-semibold text-white/45">
              Mock screen {index + 1}. Заменить на оригинальный скрин.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ImagePreview({ preview, onClose }: { preview: { title: string; src: string } | null; onClose: () => void }) {
  if (!preview) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/85 p-4 pt-24 backdrop-blur-sm sm:p-8 sm:pt-28"
      role="dialog"
      aria-modal="true"
      aria-label={preview.title}
      onClick={onClose}
    >
      <div className="relative flex max-h-full w-full max-w-6xl flex-col items-center" onClick={(event) => event.stopPropagation()}>
        <div className="relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
            aria-label="Закрыть превью"
          >
            Закрыть
          </button>
          <Image
            src={preview.src}
            alt={preview.title}
            width={1800}
            height={1200}
            className="h-auto max-h-[calc(100vh-8rem)] w-auto max-w-[calc(100vw-2rem)] rounded-[1.5rem] border border-white/15 object-contain shadow-[0_30px_120px_rgba(0,0,0,0.65)] sm:max-h-[calc(100vh-10rem)] sm:max-w-[calc(100vw-4rem)]"
          />
        </div>
        <p className="mt-4 text-center text-sm font-semibold text-white/65">{preview.title}</p>
      </div>
    </div>
  );
}

function ArtifactMock({ type, accent }: { type: ArtifactType; accent: string }) {
  if (type === "event-storming") {
    return (
      <div className="mt-6 grid grid-cols-3 gap-2">
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className={`h-9 rounded-md ${index % 4 === 0 ? "bg-[#ffb84d]" : index % 3 === 0 ? "bg-[#8fd3ff]" : "bg-white"}`} />
        ))}
      </div>
    );
  }

  if (type === "experience-map") {
    return (
      <div className="mt-6 space-y-3">
        {Array.from({ length: 4 }).map((_, row) => (
          <div key={row} className="grid grid-cols-5 gap-2">
            {Array.from({ length: 5 }).map((_, column) => (
              <div key={column} className="h-10 rounded-lg bg-white" style={row === 1 && column > 1 ? { background: accent } : undefined} />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="h-12 w-24 rounded-xl" style={{ background: index === 1 ? accent : "#fff" }} />
          <div className="h-px flex-1 bg-black/25" />
          <div className="h-12 w-24 rounded-xl bg-white" />
        </div>
      ))}
    </div>
  );
}
