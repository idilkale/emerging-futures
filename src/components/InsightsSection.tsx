import { insights } from "../data/insights";
import { InsightBlock } from "./InsightBlock";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function InsightsSection() {
  return (
    <section id="patterns" className="bg-paper py-24 text-ink md:py-32">
      <div className="container-editorial grid grid-cols-1 gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <Reveal>
              <SectionLabel index="06" label="Patterns" />
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-balance mt-8 max-w-md font-sans text-display-2 font-light leading-[1.05]">
                The futures disagree on almost everything.
                <br />
                <span className="text-steel">Except this.</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-8 max-w-sm text-edit font-light leading-relaxed text-ink/65">
                Across all four futures, education shifts from preparing
                students for a specific job toward preparing them to navigate
                continuous change.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="md:col-span-7">
          {insights.map((insight, i) => (
            <InsightBlock key={insight.id} insight={insight} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} />
          ))}
          <div className="rule text-ink" />
        </div>
      </div>
    </section>
  );
}
