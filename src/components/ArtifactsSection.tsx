import { artifacts } from "../data/artifacts";
import { futures } from "../data/futures";
import { ArtifactCard } from "./ArtifactCard";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function ArtifactsSection() {
  return (
    <section id="artifacts" className="bg-paper py-24 text-ink md:py-32">
      <div className="container-editorial">
        <Reveal>
          <SectionLabel index="04" label="Artifacts From Tomorrow" />
        </Reveal>
        <Reveal delay={1}>
          <h2 className="text-balance mt-8 max-w-3xl font-sans text-display-2 font-light leading-[1.05]">
            What would this future look like on an ordinary day?
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 max-w-xl text-edit font-light leading-relaxed text-ink/65">
            Four speculative dispatches, one from each future — treated as
            evidence recovered from a world that has not happened yet.
          </p>
        </Reveal>
      </div>

      <Reveal delay={3}>
        <div className="container-editorial mt-16">
          <div className="flex gap-6 overflow-x-auto pb-8 [scrollbar-width:thin] snap-x snap-mandatory">
            {artifacts.map((artifact) => {
              const future = futures.find((f) => f.id === artifact.futureId)!;
              return (
                <div className="snap-start" key={artifact.futureId}>
                  <ArtifactCard artifact={artifact} future={future} />
                </div>
              );
            })}
          </div>
        </div>
        <p className="label-mono container-editorial mt-2 text-ink/35 md:hidden">
          Swipe to browse the archive
        </p>
      </Reveal>
    </section>
  );
}
