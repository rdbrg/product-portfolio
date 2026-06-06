"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -500, y: -500 });
  const current = useRef({ x: -500, y: -500 });
  const tint = useRef(0);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
    };

    // Spawn under cursor on first mount (e.g. after route navigation)
    // even if the user doesn't move the pointer.
    const initialX = (typeof window !== "undefined" ? window.innerWidth : 0) / 2;
    const initialY = (typeof window !== "undefined" ? window.innerHeight : 0) / 2;
    target.current = { x: initialX, y: initialY };
    current.current = { x: initialX, y: initialY };

    let frameId = 0;

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;

        const centerX = window.innerWidth / 2;
        const normalized = Math.max(-1, Math.min(1, (target.current.x - centerX) / centerX));
        // -1 (left edge) => pink, +1 (right edge) => purple
        const nextTint = (normalized + 1) / 2;
        tint.current += (nextTint - tint.current) * 0.08;
        glowRef.current.style.setProperty("--tint", tint.current.toFixed(3));
      }

      frameId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{ "--tint": 0.5 } as React.CSSProperties}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[44rem] w-[44rem] rounded-full blur-[105px] saturate-150 will-change-transform lg:block [background:radial-gradient(circle,rgba(219,39,119,calc(0.60-0.60*var(--tint)))_0%,rgba(255,47,167,calc(0.34-0.34*var(--tint)))_38%,rgba(145,70,255,calc(0.00+0.60*var(--tint)))_58%,transparent_72%)]"
    />
  );
}
