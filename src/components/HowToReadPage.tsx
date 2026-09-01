import { axisDefinitions } from "../data/axisDefinitions";
import { FutureAxisTable } from "./FutureAxisTable";
import { FuturePageFooter } from "./FuturePageFooter";
import { FutureSidebarNav } from "./FutureSidebarNav";
import { FutureTopNav } from "./FutureTopNav";
import { Reveal } from "./Reveal";

const SECTIONS = [
  { id: "seven-axes", label: "The seven axes" },
  { id: "understanding-axes", label: "Understanding the axes" },
  { id: "putting-it-together", label: "Putting it together" },
];

function SectionEyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="label-mono mb-4 text-ink/40">
      {index} — {label}
    </p>
  );
}

export function HowToReadPage() {
  return (
    <div className="bg-paper text-ink">
      <FutureTopNav activeSlug="" />

      {/* hero */}
      <section className="border-b border-ink/10 pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="container-editorial grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-7">
            <h1 className="text-balance font-sans text-display-2 font-bold leading-[1.03] text-ink">
              How to read the futures
            </h1>
          </Reveal>
          <Reveal delay={1} className="md:col-span-5">
            <p className="text-balance text-edit font-light leading-relaxed text-ink/60">
              The four futures combine different conditions across seven
              forces that shape higher education, work, and learning. Each
              future takes a different position on these axes. Together,
              those positions create a distinct system and a different
              experience for the people inside it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* body */}
      <section className="container-editorial grid grid-cols-1 gap-14 py-16 md:grid-cols-12 md:gap-10 md:py-24">
        <div className="md:col-span-3">
          <FutureSidebarNav title="On This Page" sections={SECTIONS} />
        </div>

        <div className="md:col-span-9 md:max-w-2xl">
          {/* 01 the seven axes */}
          <div id="seven-axes" className="scroll-mt-32">
            <Reveal>
              <SectionEyebrow index="01" label="The Seven Axes" />
              <h2 className="text-balance font-sans text-display-3 font-medium leading-tight text-ink">
                The seven axes
              </h2>
              <p className="mt-3 text-copy leading-relaxed text-ink/50">
                Each future is defined by its position across seven forces.
                The table below shows how those forces combine differently in
                each scenario.
              </p>
              <div className="mt-6">
                <FutureAxisTable activeSlug="" />
              </div>
            </Reveal>
          </div>

          {/* 02 understanding the axes */}
          <div id="understanding-axes" className="scroll-mt-32 border-t border-ink/10 pt-12 mt-12">
            <Reveal>
              <SectionEyebrow index="02" label="Understanding The Axes" />
              <h2 className="text-balance font-sans text-display-3 font-medium leading-tight text-ink">
                Understanding the axes
              </h2>
              <p className="mt-3 text-copy leading-relaxed text-ink/50">
                Each axis represents a spectrum of possibilities. These
                definitions explain what each position means and how it
                shapes the future.
              </p>

              <div className="mt-10 flex flex-col gap-10">
                {axisDefinitions.map((axis) => (
                  <div key={axis.number}>
                    <h3 className="font-sans text-lg font-medium text-ink md:text-xl">
                      {axis.number} - {axis.label}
                    </h3>
                    <p className="mt-1 text-copy text-ink/50">{axis.question}</p>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {axis.options.map((option) => (
                        <div
                          key={option.label}
                          className="border-t-2 border-explorer-cyan bg-paper-dim/40 p-5"
                        >
                          <p className="font-sans text-sm font-semibold text-ink">
                            {option.label}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-ink/60">
                            {option.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 putting it together — closing CTA */}
      <section
        id="putting-it-together"
        className="scroll-mt-32 bg-navy py-20 md:py-28"
      >
        <div className="container-editorial">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-10">
              <div className="md:mt-28">
                <span className="label-mono inline-flex items-center bg-explorer-cyan px-4 py-2 text-paper">
                  Putting It Together
                </span>
              </div>

              <div>
                <h2 className="text-balance font-sans text-display-3 font-bold leading-[1.05] text-paper">
                  How the axes create a future
                </h2>

                <div className="mt-6 flex flex-col gap-4">
                  <p className="text-balance text-copy font-light leading-relaxed text-paper/60">
                    A future where institutions remain trusted, labor changes
                    gradually, AI augments human work, and higher education
                    remains workforce-focused creates a very different system
                    from one where credentials fragment, labor becomes
                    volatile, and learning moves continuously between
                    institutions, employers, and platforms.
                  </p>
                </div>

                <p className="mt-6 text-balance font-sans text-subhead font-bold leading-snug text-paper">
                  The futures explore what becomes possible and what becomes
                  difficult when these forces move together.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FuturePageFooter />
    </div>
  );
}
