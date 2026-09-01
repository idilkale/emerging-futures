import { useState } from "react";
import type { Future } from "../data/types";
import { FutureMetric } from "./FutureMetric";
import { Reveal } from "./Reveal";

interface CategoryRowProps {
  index: string;
  label: string;
  content: string | string[];
  dark: boolean;
  accent: string;
  defaultOpen?: boolean;
}

function CategoryRow({ index, label, content, dark, accent, defaultOpen }: CategoryRowProps) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div className={`border-b ${dark ? "border-paper/12" : "border-ink/12"}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="flex items-center gap-4">
          <span className="label-mono" style={{ color: accent }}>
            {index}
          </span>
          <span
            className={`font-sans text-lg md:text-xl ${
              dark ? "text-paper" : "text-ink"
            }`}
          >
            {label}
          </span>
        </span>
        <span
          className={[
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-500",
            dark ? "border-paper/25 text-paper" : "border-ink/25 text-ink",
            open ? "rotate-45" : "",
          ].join(" ")}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-editorial ${
          open ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          {Array.isArray(content) ? (
            <ul className="flex flex-wrap gap-2">
              {content.map((item) => (
                <li
                  key={item}
                  className={[
                    "label-mono rounded-full border px-4 py-2",
                    dark
                      ? "border-paper/20 text-paper/75"
                      : "border-ink/20 text-ink/70",
                  ].join(" ")}
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p
              className={`max-w-xl text-balance text-sm leading-relaxed md:text-base ${
                dark ? "text-paper/65" : "text-ink/65"
              }`}
            >
              {content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

interface FutureDetailProps {
  future: Future;
  dark: boolean;
}

export function FutureDetail({ future, dark }: FutureDetailProps) {
  const bg = dark ? "bg-ink text-paper" : "bg-paper text-ink";

  return (
    <section
      id={`future-${future.slug}`}
      className={`relative scroll-mt-20 border-t ${
        dark ? "border-paper/10" : "border-ink/10"
      } ${bg} py-24 md:py-32`}
    >
      <div className="container-editorial grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <Reveal>
              <div
                className="label-mono mb-6 inline-flex items-center gap-3"
                style={{ color: future.accent }}
              >
                <span className="h-px w-8" style={{ background: future.accent }} />
                Future {future.number}
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h3 className="text-balance font-sans text-display-2 font-light leading-[0.98]">
                {future.title}
              </h3>
            </Reveal>

            <Reveal delay={2}>
              <p
                className={`mt-6 max-w-sm text-balance text-edit font-light leading-snug ${
                  dark ? "text-paper/65" : "text-ink/65"
                }`}
              >
                {future.tagline}
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div
                className="relative mt-10 flex aspect-[4/3] w-full max-w-sm items-end overflow-hidden rounded-2xl border p-6"
                style={{
                  borderColor: dark ? "rgba(244,241,234,0.12)" : "rgba(10,12,16,0.1)",
                  background: `radial-gradient(120% 100% at 15% 0%, ${future.accent}22, transparent 60%), ${
                    dark ? "#111a2b" : "#eae6db"
                  }`,
                }}
              >
                <span
                  className="pointer-events-none absolute -right-6 -top-8 font-sans text-[9rem] font-light leading-none opacity-[0.08]"
                  style={{ color: dark ? "#f4f1ea" : "#0a0c10" }}
                >
                  {future.number}
                </span>
                <p
                  className={`relative text-balance text-sm italic leading-relaxed ${
                    dark ? "text-paper/70" : "text-ink/70"
                  }`}
                >
                  {future.statement}
                </p>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-8 flex max-w-sm flex-col gap-5">
                <FutureMetric
                  label="AI Capability / Adoption"
                  value={future.aiLevel}
                  accent={future.accent}
                  tone={dark ? "dark" : "light"}
                />
                <FutureMetric
                  label="Trust / Verification"
                  value={future.trustLevel}
                  accent={future.accent}
                  tone={dark ? "dark" : "light"}
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <p
              className={`mb-8 max-w-2xl text-balance text-edit font-light leading-relaxed ${
                dark ? "text-paper/70" : "text-ink/70"
              }`}
            >
              {future.overview}
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className={`border-t ${dark ? "border-paper/12" : "border-ink/12"}`}>
              <CategoryRow
                index="01"
                label="Driving Force"
                content={future.drivingForce}
                dark={dark}
                accent={future.accent}
                defaultOpen
              />
              <CategoryRow
                index="02"
                label="Education"
                content={future.education}
                dark={dark}
                accent={future.accent}
              />
              <CategoryRow
                index="03"
                label="Employment"
                content={future.employment}
                dark={dark}
                accent={future.accent}
              />
              <CategoryRow
                index="04"
                label="Career Mobility"
                content={future.careerMobility}
                dark={dark}
                accent={future.accent}
              />
              <CategoryRow
                index="05"
                label="Emerging Careers"
                content={future.emergingCareers}
                dark={dark}
                accent={future.accent}
              />
              <CategoryRow
                index="06"
                label="Career Readiness"
                content={future.careerReadiness}
                dark={dark}
                accent={future.accent}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
