import { useState } from "react";
import type { Future } from "../data/types";

interface FuturesMapProps {
  futures: Future[];
}

export function FuturesMap({ futures }: FuturesMapProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = futures.find((f) => f.id === activeId) ?? null;

  const points = futures
    .map((f) => `${f.aiLevel},${100 - f.trustLevel}`)
    .join(" ");

  return (
    <div className="w-full">
      <div className="overflow-x-auto pb-4 md:overflow-visible">
        <div className="relative min-w-[640px] md:min-w-0">
          {/* vertical axis caption */}
          <div className="absolute -left-2 top-0 hidden h-full -translate-x-full items-center md:flex">
            <span className="label-mono w-24 -rotate-90 whitespace-nowrap text-center text-paper/45">
              Trust / Verification — Low → High
            </span>
          </div>

          <div className="atmosphere-cool relative aspect-[16/10] w-full overflow-hidden rounded-[28px] border border-paper/10">
            {/* quadrant zones */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[8%] top-[55%] h-56 w-56 rounded-full bg-signal/10 blur-3xl" />
              <div className="absolute right-[10%] top-[8%] h-64 w-64 rounded-full bg-steel/20 blur-3xl" />
              <div className="absolute bottom-[6%] right-[15%] h-72 w-72 rounded-full bg-silver/10 blur-3xl" />
            </div>

            {/* grid */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {[25, 50, 75].map((v) => (
                <line
                  key={`v-${v}`}
                  x1={`${v}%`}
                  y1="0"
                  x2={`${v}%`}
                  y2="100%"
                  stroke="rgba(244,241,234,0.08)"
                  strokeWidth={1}
                />
              ))}
              {[25, 50, 75].map((v) => (
                <line
                  key={`h-${v}`}
                  x1="0"
                  y1={`${v}%`}
                  x2="100%"
                  y2={`${v}%`}
                  stroke="rgba(244,241,234,0.08)"
                  strokeWidth={1}
                />
              ))}
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100%"
                stroke="rgba(244,241,234,0.16)"
                strokeWidth={1}
              />
              <line
                x1="0"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="rgba(244,241,234,0.16)"
                strokeWidth={1}
              />
              <polyline
                points={points}
                fill="none"
                stroke="rgba(193,137,63,0.35)"
                strokeWidth={0.6}
                vectorEffect="non-scaling-stroke"
                strokeDasharray="3 3"
              />
            </svg>

            {/* nodes */}
            {futures.map((f) => {
              const isActive = activeId === f.id;
              return (
                <a
                  key={f.id}
                  href={`#future-${f.slug}`}
                  onMouseEnter={() => setActiveId(f.id)}
                  onMouseLeave={() => setActiveId((cur) => (cur === f.id ? null : cur))}
                  onFocus={() => setActiveId(f.id)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 outline-none"
                  style={{ left: `${f.aiLevel}%`, top: `${100 - f.trustLevel}%` }}
                >
                  <span
                    className={[
                      "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500",
                      isActive ? "h-14 w-14 opacity-100" : "h-8 w-8 opacity-0",
                    ].join(" ")}
                    style={{ background: `radial-gradient(circle, ${f.accent}33, transparent 70%)` }}
                  />
                  <span
                    className="relative flex items-center justify-center rounded-full border transition-all duration-300"
                    style={{
                      height: isActive ? 16 : 10,
                      width: isActive ? 16 : 10,
                      borderColor: f.accent,
                      background: isActive ? f.accent : "rgba(10,12,16,0.4)",
                    }}
                  />
                  <span
                    className={[
                      "label-mono absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap transition-colors duration-300",
                      isActive ? "text-paper" : "text-paper/50",
                    ].join(" ")}
                  >
                    {f.number} — {f.shortTitle}
                  </span>
                </a>
              );
            })}

            {/* tooltip */}
            {active && (
              <div
                className="pointer-events-none absolute z-10 w-64 -translate-x-1/2 rounded-xl border border-paper/15 bg-ink/95 p-5 shadow-2xl backdrop-blur-sm transition-opacity duration-200"
                style={{
                  left: `${active.aiLevel}%`,
                  top: `${Math.max(100 - active.trustLevel - 24, 6)}%`,
                }}
              >
                <div className="label-mono text-paper/40">Future {active.number}</div>
                <div className="mt-2 font-sans text-lg font-medium text-paper">
                  {active.title}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-paper/60">
                  {active.tagline}
                </p>
              </div>
            )}

            {/* axis end labels */}
            <span className="label-mono absolute bottom-3 left-4 text-paper/35">Low</span>
            <span className="label-mono absolute bottom-3 right-4 text-paper/35">High</span>
            <span className="label-mono absolute left-4 top-3 text-paper/35">High</span>
            <span className="label-mono absolute bottom-3 left-1/2 hidden -translate-x-1/2 md:block text-paper/35">
              AI Capability / Adoption
            </span>
          </div>
        </div>
      </div>
      <p className="label-mono mt-6 text-ink/40 md:hidden">
        Scroll horizontally to explore the map
      </p>
    </div>
  );
}
