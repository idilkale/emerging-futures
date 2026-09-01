import { futures } from "../data/futures";
import { FuturesMap } from "./FuturesMap";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function FuturesFramework() {
  return (
    <section id="map" className="grain relative overflow-hidden bg-ink py-28 md:py-36">
      <div className="container-editorial">
        <Reveal>
          <SectionLabel index="02" label="Futures Framework" tone="light" />
        </Reveal>

        <Reveal delay={1}>
          <h2 className="text-balance mt-8 max-w-3xl font-sans text-display-2 font-light leading-[1.05] text-paper">
            Four futures. Two forces.
            <br />
            <span className="text-paper/45">No single answer.</span>
          </h2>
        </Reveal>

        <Reveal delay={2} className="mt-8 max-w-xl">
          <p className="text-edit font-light leading-relaxed text-paper/60">
            Each scenario is positioned by how far AI capability has spread,
            and how much the systems around it are trusted and verified.
            Hover a point to preview a future. Select it to step inside.
          </p>
        </Reveal>

        <Reveal delay={3} className="mt-16">
          <FuturesMap futures={futures} />
        </Reveal>
      </div>
    </section>
  );
}
