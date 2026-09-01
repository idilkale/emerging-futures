import { useEffect, useState } from "react";

export interface SidebarSection {
  id: string;
  label: string;
}

const DEFAULT_SECTIONS: SidebarSection[] = [
  { id: "how-it-started", label: "How it started" },
  { id: "what-changed", label: "What changed" },
  { id: "axis-positions", label: "Axis positions" },
  { id: "future-indicators", label: "Future indicators" },
  { id: "three-voices", label: "Three voices" },
  { id: "emerging-careers", label: "Emerging careers" },
  { id: "readiness-implications", label: "Readiness implications" },
  { id: "open-question", label: "Open question" },
];

interface FutureSidebarNavProps {
  title?: string;
  sections?: SidebarSection[];
}

export function FutureSidebarNav({
  title = "In This Future",
  sections = DEFAULT_SECTIONS,
}: FutureSidebarNavProps) {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const elements = sections.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const top = visible.reduce((a, b) =>
          Math.abs(a.boundingClientRect.top) < Math.abs(b.boundingClientRect.top) ? a : b
        );
        setActiveId(top.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: [0, 0.5, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="hidden h-full md:block">
      <div className="sticky top-32">
        <p className="label-mono mb-5 text-ink/35">{title}</p>
        <ul className="flex flex-col gap-1 border-l border-ink/10">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={[
                    "-ml-px flex items-center gap-3 border-l-2 py-2 pl-4 text-sm transition-colors duration-300",
                    isActive
                      ? "border-explorer-cyan text-ink"
                      : "border-transparent text-ink/45 hover:text-ink/70",
                  ].join(" ")}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
