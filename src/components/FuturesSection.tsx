import { useRef } from "react";
import { futures } from "../data/futures";
import { FutureDetail } from "./FutureDetail";
import { FuturePreview } from "./FuturePreview";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function FuturesSection() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="futures">
      <div className="bg-paper py-24 text-ink md:py-32">
        <div className="container-editorial">
          <Reveal>
            <SectionLabel index="03" label="Possible Futures" />
          </Reveal>
          <Reveal delay={1}>
            <h2 className="text-balance mt-8 max-w-3xl font-sans text-display-2 font-light leading-[1.03]">
              The future does not arrive as one story.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-xl text-edit font-light leading-relaxed text-ink/65">
              Four scenarios, each shaped by a different balance of AI capability
              and institutional trust. None are predictions. All are worth
              taking seriously.
            </p>
          </Reveal>
        </div>
      </div>

      <div ref={wrapperRef}>
        {futures.map((future, i) => (
          <FutureDetail key={future.id} future={future} dark={i % 2 === 0} />
        ))}
      </div>

      <FuturePreview futures={futures} containerRef={wrapperRef} />
    </section>
  );
}
