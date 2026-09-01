import { Link } from "react-router-dom";
import { futures } from "../data/futures";
import { personas } from "../data/personas";
import { asset } from "../lib/asset";
import { FuturePageFooter } from "./FuturePageFooter";
import { FutureListRow } from "./FutureListRow";
import { HowItWorksSection } from "./HowItWorksSection";
import { InstitutionMark } from "./InstitutionMark";
import { PersonaPicker } from "./PersonaPicker";
import { Reveal } from "./Reveal";

export function ExplorerSection() {
  return (
    <div>
      {/* hero */}
      <section className="atmosphere grain relative overflow-hidden">
        <div className="container-editorial relative flex h-16 items-center border-b border-paper/10">
          <InstitutionMark tone="light" />
          <span className="label-mono ml-6 border border-paper/30 px-4 py-1.5 text-paper/80">
            Emerging Futures Studio
          </span>
        </div>

        <div className="container-editorial relative z-10 py-20 md:py-28">
          <div className="mt-10 max-w-2xl">
            <Reveal>
              <h1 className="text-balance font-sans text-display-1 font-light leading-[0.98] text-paper">
                Welcome to 2036
              </h1>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-6 max-w-md text-balance text-edit font-light leading-relaxed text-paper/65">
                What does it mean to be career-ready when the goalpost keeps
                moving?
              </p>
            </Reveal>
            <Reveal delay={2}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#personas"
                  className="label-mono bg-explorer-cyan px-6 py-3 text-ink transition-opacity hover:opacity-90"
                >
                  Choose your persona
                </a>
                <a
                  href="#futures"
                  className="label-mono border border-paper/30 px-6 py-3 text-paper transition-colors duration-300 hover:border-paper"
                >
                  Explore the futures
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 -bottom-16 z-0 flex justify-end">
          <div className="w-[165%] max-w-[1950px]">
            <Reveal delay={2}>
              <img src={asset("hero-ribbon.png")} alt="" className="block h-auto w-full" />
            </Reveal>
          </div>
        </div>
      </section>

      <HowItWorksSection />

      {/* personas */}
      <section id="personas" className="bg-paper py-20 text-ink md:py-28">
        <div className="container-editorial grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="label-mono text-ink/40">Personas</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-balance mt-4 font-sans text-display-3 font-medium leading-[1.05] text-ink">
                Whose 2036 is it?
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2} className="md:col-span-6 md:col-start-7">
            <p className="text-balance text-copy font-light leading-relaxed text-ink/60">
              Every future looks different depending on where you stand.
              Choose a persona and experience it from their perspective.
            </p>
          </Reveal>
        </div>

        <Reveal delay={3} className="container-editorial mt-14">
          <PersonaPicker personas={personas} />
        </Reveal>
      </section>

      {/* futures */}
      <section id="futures" className="bg-paper py-20 text-ink md:py-28">
        <div className="container-editorial grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="label-mono text-ink/40">Futures</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-balance mt-4 font-sans text-display-3 font-medium leading-[1.05] text-ink">
                Choose your future
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2} className="md:col-span-6 md:col-start-7">
            <p className="text-balance text-copy font-light leading-relaxed text-ink/60">
              Each future is a possible 2036, told from multiple angles: how
              it started, how it unfolded, who lives with the consequences,
              and what questions remain.
            </p>
            <Link
              to="/how-to-read"
              className="label-mono mt-4 inline-block text-ink/50 transition-colors duration-300 hover:text-ink"
            >
              How to read the futures →
            </Link>
          </Reveal>
        </div>

        <Reveal delay={3} className="container-editorial mt-14">
          <div className="mx-auto flex max-w-4xl flex-col">
            {futures.map((future) => (
              <FutureListRow key={future.id} future={future} />
            ))}
          </div>
        </Reveal>
      </section>

      <FuturePageFooter />
    </div>
  );
}
