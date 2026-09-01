import { provocations } from "../data/provocations";
import { ProvocationCard } from "./ProvocationCard";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function ProvocationsSection() {
  return (
    <section id="provocations" className="grain relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="container-editorial">
        <Reveal>
          <SectionLabel index="07" label="Provocations" tone="light" />
        </Reveal>
        <Reveal delay={1}>
          <h2 className="text-balance mt-8 max-w-3xl font-sans text-display-2 font-light leading-[1.05] text-paper">
            The question is not, &ldquo;what will AI do?&rdquo;
            <br />
            <span className="text-paper/45">
              The question is, &ldquo;what will humans need to become?&rdquo;
            </span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 max-w-xl text-edit font-light leading-relaxed text-paper/55">
            Click a card to see another way of holding the same question.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {provocations.map((p, i) => (
            <Reveal key={p.front} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <ProvocationCard provocation={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
