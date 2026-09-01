import { useEffect, useRef, useState, type RefObject } from "react";
import type { Future } from "../data/types";

interface FuturePreviewProps {
  futures: Future[];
  containerRef: RefObject<HTMLElement>;
}

export function FuturePreview({ futures, containerRef }: FuturePreviewProps) {
  const [activeSlug, setActiveSlug] = useState(futures[0]?.slug);
  const [visible, setVisible] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = containerRef.current;
    if (!wrapper) return;

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.02 }
    );
    visibilityObserver.observe(wrapper);

    const sections = futures
      .map((f) => document.getElementById(`future-${f.slug}`))
      .filter((el): el is HTMLElement => !!el);

    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length === 0) return;
        const top = visibleEntries.reduce((a, b) =>
          Math.abs(a.boundingClientRect.top) < Math.abs(b.boundingClientRect.top) ? a : b
        );
        const slug = top.target.id.replace("future-", "");
        setActiveSlug(slug);
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => activeObserver.observe(s));

    return () => {
      visibilityObserver.disconnect();
      activeObserver.disconnect();
    };
  }, [futures, containerRef]);

  return (
    <div
      ref={navRef}
      className={[
        "fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 rounded-full border border-paper/10 bg-ink/70 px-3 py-5 backdrop-blur-md transition-opacity duration-500 lg:flex",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
    >
      {futures.map((f) => {
        const isActive = f.slug === activeSlug;
        return (
          <a
            key={f.id}
            href={`#future-${f.slug}`}
            className="group flex items-center gap-3"
          >
            <span
              className={[
                "label-mono transition-all duration-300",
                isActive ? "opacity-100" : "text-paper/50 opacity-0 group-hover:opacity-70",
              ].join(" ")}
              style={{ color: isActive ? f.accent : undefined }}
            >
              {f.number}
            </span>
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                height: isActive ? 8 : 5,
                width: isActive ? 8 : 5,
                background: isActive ? f.accent : "#f4f1ea",
                opacity: isActive ? 1 : 0.3,
              }}
            />
          </a>
        );
      })}
    </div>
  );
}
