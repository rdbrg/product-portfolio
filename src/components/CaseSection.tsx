"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/paths";

type CaseSectionProps = {
  title: string;
  items: string[];
  columns?: boolean;
  image?: {
    src: string;
    alt: string;
  };
};

export function CaseSection({ title, items, columns = false, image }: CaseSectionProps) {
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    if (!previewOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewOpen]);

  return (
    <>
      <section className="border-t border-white/10 py-14">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          <div className="space-y-8">
            <ul className={`grid gap-4 text-xl leading-8 text-white/68 ${columns ? "md:grid-cols-2" : ""}`}>
              {items.map((item) => (
                <li key={item} className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-purple">
                  {item}
                </li>
              ))}
            </ul>
            {image ? (
              <button
                type="button"
                onClick={() => setPreviewOpen(true)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white text-left outline-none transition hover:-translate-y-0.5 hover:border-white/30 focus-visible:ring-2 focus-visible:ring-purple"
                aria-label={`Открыть превью: ${image.alt}`}
              >
                <Image src={withBasePath(image.src)} alt={image.alt} width={2000} height={1100} className="h-auto w-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/25 group-hover:opacity-100 group-focus-visible:bg-black/25 group-focus-visible:opacity-100">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black">Открыть</span>
                </span>
              </button>
            ) : null}
          </div>
        </div>
      </section>
      {image && previewOpen ? (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/85 p-4 pt-24 backdrop-blur-sm sm:p-8 sm:pt-28" role="dialog" aria-modal="true" aria-label={image.alt} onClick={() => setPreviewOpen(false)}>
          <div className="relative flex max-h-full w-full max-w-6xl flex-col items-center" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setPreviewOpen(false)} className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple" aria-label="Закрыть превью">
              Закрыть
            </button>
            <Image src={withBasePath(image.src)} alt={image.alt} width={2000} height={1100} className="h-auto max-h-[calc(100vh-8rem)] w-auto max-w-[calc(100vw-2rem)] rounded-2xl border border-white/15 object-contain shadow-[0_30px_120px_rgba(0,0,0,0.65)] sm:max-h-[calc(100vh-10rem)] sm:max-w-[calc(100vw-4rem)]" />
          </div>
        </div>
      ) : null}
    </>
  );
}
