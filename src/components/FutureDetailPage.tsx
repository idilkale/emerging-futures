import { Navigate, useParams } from "react-router-dom";
import { getFutureBySlug } from "../data/futures";
import { getFutureAccent } from "../data/futureAccents";
import { asset } from "../lib/asset";
import { CollapseIndicatorChart } from "./CollapseIndicatorChart";
import { ConstraintRegionsMap } from "./ConstraintRegionsMap";
import { FutureAxisTable } from "./FutureAxisTable";
import { FuturePageFooter } from "./FuturePageFooter";
import { FutureSidebarNav } from "./FutureSidebarNav";
import { FutureTopNav } from "./FutureTopNav";
import { FutureVoices } from "./FutureVoices";
import { GrowthIndicatorChart } from "./GrowthIndicatorChart";
import { Reveal } from "./Reveal";
import { TransformIndicatorChart } from "./TransformIndicatorChart";

function SectionEyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="label-mono mb-4 text-ink/40">
      {index} — {label}
    </p>
  );
}

export function FutureDetailPage() {
  const { slug } = useParams();
  const future = getFutureBySlug(slug ?? "");

  if (!future) return <Navigate to="/" replace />;

  const Icon = future.icon;
  const accent = getFutureAccent(future.slug);

  return (
    <div className="bg-paper text-ink">
      <FutureTopNav activeSlug={future.slug} />

      {/* hero */}
      <section className="border-b border-ink/10 pb-0 pt-14 md:pt-20">
        <div className="container-editorial grid grid-cols-1 gap-8 pb-14 md:grid-cols-12 md:gap-10 md:pb-20">
          <Reveal className="md:col-span-7">
            <h1 className="text-balance font-sans text-display-2 font-bold leading-[1.03] text-ink">
              {future.heroHeadline}
            </h1>
          </Reveal>
          <Reveal delay={1} className="md:col-span-5">
            <p className="text-balance text-edit font-light leading-relaxed text-ink/60">
              {future.heroIntro}
            </p>
          </Reveal>
        </div>

        <Reveal delay={2}>
          {future.heroImage ? (
            <div className="relative aspect-[21/8] w-full overflow-hidden">
              <img
                src={asset(future.heroImage)}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div
              className="relative flex aspect-[21/8] w-full items-end overflow-hidden"
              style={{
                background: `radial-gradient(120% 140% at 15% 0%, ${future.accent}26, transparent 55%), linear-gradient(160deg, #39415a 0%, #1c2333 100%)`,
              }}
            >
              <Icon
                className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-paper/[0.06] md:h-80 md:w-80"
                strokeWidth={0.75}
              />
            </div>
          )}
        </Reveal>
      </section>

      {/* body */}
      <section className="container-editorial grid grid-cols-1 gap-14 py-16 md:grid-cols-12 md:gap-10 md:py-24">
        <div className="md:col-span-3">
          <FutureSidebarNav />
        </div>

        <div className="md:col-span-9 md:max-w-2xl">
          {/* 01 how it started */}
          <div id="how-it-started" className="scroll-mt-32 border-t border-ink/10 pt-12">
            <Reveal>
              <SectionEyebrow index="01" label="How It Started" />
              <h2 className="text-balance font-sans text-display-3 font-medium leading-tight text-ink">
                {future.howItStartedTitle}
              </h2>
              <div className="mt-5 flex flex-col gap-4">
                {future.howItStartedBody.map((p) => (
                  <p key={p} className="text-balance text-copy leading-relaxed text-ink/65">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* 02 what changed */}
          <div id="what-changed" className="scroll-mt-32 border-t border-ink/10 pt-12 mt-12">
            <Reveal>
              <SectionEyebrow index="02" label="What Changed" />
              <h2 className="text-balance font-sans text-display-3 font-medium leading-tight text-ink">
                {future.whatChangedTitle}
              </h2>
              <p className="mt-5 text-balance text-copy leading-relaxed text-ink/65">
                {future.whatChangedBefore}
              </p>

              <blockquote
                className="my-8 border-l-2 pl-5 text-balance text-subhead font-bold leading-snug text-ink"
                style={{ borderColor: accent }}
              >
                {future.pullQuote}
              </blockquote>

              <div
                className="aspect-[16/9] w-full rounded-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #e6e6e6 25%, transparent 25%), linear-gradient(-45deg, #e6e6e6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e6e6e6 75%), linear-gradient(-45deg, transparent 75%, #e6e6e6 75%)",
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0px",
                  backgroundColor: "#f7f7f7",
                }}
              />

              <p className="mt-5 text-balance text-copy leading-relaxed text-ink/65">
                {future.whatChangedAfter}
              </p>
            </Reveal>
          </div>

          {/* 03 axis positions */}
          <div id="axis-positions" className="scroll-mt-32 border-t border-ink/10 pt-12 mt-12">
            <Reveal>
              <SectionEyebrow index="03" label="Axis Positions" />
              <h2 className="text-balance font-sans text-display-3 font-medium leading-tight text-ink">
                The architecture of {future.codename.charAt(0) + future.codename.slice(1).toLowerCase()}
              </h2>
              <p className="mt-3 text-copy leading-relaxed text-ink/50">{future.axisSummary}</p>
              <div className="mt-6">
                <FutureAxisTable activeSlug={future.slug} />
              </div>
            </Reveal>
          </div>

          {/* 04 future indicators */}
          <div id="future-indicators" className="scroll-mt-32 border-t border-ink/10 pt-12 mt-12">
            <Reveal>
              <SectionEyebrow index="04" label="Future Indicators" />
              <h2 className="text-balance font-sans text-display-3 font-medium leading-tight text-ink">
                {future.indicatorTitle}
              </h2>
              <p className="mt-3 text-copy leading-relaxed text-ink/50">{future.indicatorSubtitle}</p>
              <div className="mt-6">
                {future.slug === "growth" && <GrowthIndicatorChart />}
                {future.slug === "collapse" && <CollapseIndicatorChart />}
                {future.slug === "constraint" && <ConstraintRegionsMap />}
                {future.slug === "transformation" && <TransformIndicatorChart />}
              </div>
            </Reveal>
          </div>

          {/* 05 three voices */}
          <div id="three-voices" className="scroll-mt-32 border-t border-ink/10 pt-12 mt-12">
            <Reveal>
              <SectionEyebrow index="05" label="Three Voices" />
              <h2 className="text-balance font-sans text-display-3 font-medium leading-tight text-ink">
                {future.threeVoicesTitle}
              </h2>
              <div className="mt-6">
                <FutureVoices voices={future.voices} />
              </div>
            </Reveal>
          </div>

          {/* 06 emerging careers */}
          <div id="emerging-careers" className="scroll-mt-32 border-t border-ink/10 pt-12 mt-12">
            <Reveal>
              <SectionEyebrow index="06" label="Emerging Careers" />
              <h2 className="text-balance font-sans text-display-3 font-medium leading-tight text-ink">
                {future.careerHandoffTitle}
              </h2>
              <p className="mt-3 max-w-lg text-copy leading-relaxed text-ink/60">
                {future.careerHandoffBody}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {future.emergingCareers.map((career) => (
                  <div
                    key={career}
                    className="rounded-lg border border-ink/10 px-4 py-3 text-copy text-ink/75"
                  >
                    {career}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* 07 readiness implications */}
          <div id="readiness-implications" className="scroll-mt-32 border-t border-ink/10 pt-12 mt-12">
            <Reveal>
              <SectionEyebrow index="07" label="Readiness Implications" />
              <h2 className="text-balance font-sans text-display-3 font-medium leading-tight text-ink">
                {future.readinessTitle}
              </h2>
              <p className="mt-5 max-w-xl text-balance text-copy leading-relaxed text-ink/65">
                {future.careerReadiness}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 08 open question — closing CTA */}
      <section id="open-question" className="scroll-mt-32 bg-navy py-20 md:py-28">
        <div className="container-editorial">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-10">
              <div className="md:mt-28">
                <span className="label-mono inline-flex items-center bg-explorer-cyan px-4 py-2 text-paper">
                  Open Question
                </span>
              </div>

              <div>
                <h2 className="text-balance font-sans text-display-3 font-bold leading-[1.05] text-paper">
                  {future.closingHeadline}
                </h2>

                <div className="mt-6 flex flex-col gap-4">
                  {future.closingBody.map((p) => (
                    <p
                      key={p}
                      className="text-balance text-copy font-light leading-relaxed text-paper/60"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                <p className="mt-6 text-balance font-sans text-subhead font-bold leading-snug text-paper">
                  {future.closingQuestion}
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
