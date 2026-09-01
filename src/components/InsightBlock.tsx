import type { Insight } from "../data/types";
import { Reveal } from "./Reveal";

export function InsightBlock({ insight, delay }: { insight: Insight; delay?: 1 | 2 | 3 | 4 }) {
  return (
    <Reveal delay={delay}>
      <div className="grid grid-cols-[auto_1fr] items-start gap-6 border-t border-ink/12 py-8">
        <span className="label-mono pt-1 text-ink/35">{insight.index}</span>
        <div>
          <h3 className="font-sans text-2xl font-medium leading-tight text-ink md:text-3xl">
            {insight.title}
          </h3>
          <p className="mt-3 max-w-xl text-balance text-sm leading-relaxed text-ink/60 md:text-base">
            {insight.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
