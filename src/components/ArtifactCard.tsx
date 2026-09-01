import type { Artifact, Future } from "../data/types";

interface ArtifactCardProps {
  artifact: Artifact;
  future: Future;
}

export function ArtifactCard({ artifact, future }: ArtifactCardProps) {
  return (
    <a
      href={`#future-${future.slug}`}
      className="group flex w-[280px] shrink-0 flex-col md:w-[340px]"
    >
      <div
        className="relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden rounded-2xl border border-paper/10 p-6 transition-transform duration-700 ease-editorial group-hover:-translate-y-2"
        style={{
          background: `linear-gradient(160deg, #17202f 0%, #0a0c10 70%)`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-70"
          style={{
            background: `radial-gradient(120% 60% at 0% 0%, ${future.accent}2e, transparent 60%)`,
          }}
        />
        <div className="relative flex items-start justify-between">
          <span className="label-mono text-paper/45">{artifact.archiveNumber}</span>
          <span className="label-mono text-paper/45">{artifact.year}</span>
        </div>

        <div className="relative">
          <div className="label-mono mb-3 text-paper/40">{future.shortTitle}</div>
          <p className="text-balance font-sans text-xl font-medium leading-tight text-paper md:text-2xl">
            {artifact.headline}
          </p>
          <p className="mt-4 max-h-0 overflow-hidden text-sm leading-relaxed text-paper/60 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
            {artifact.deck}
          </p>
        </div>

        <span
          className="pointer-events-none absolute -bottom-6 -right-4 font-sans text-8xl font-light opacity-[0.06]"
          style={{ color: "#f4f1ea" }}
        >
          {future.number}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="label-mono text-ink/45">{artifact.category}</span>
        <span className="label-mono inline-flex items-center gap-2 text-ink transition-colors duration-300 group-hover:text-signal">
          Open Artifact
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
}
