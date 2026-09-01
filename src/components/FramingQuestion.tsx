import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const STATEMENTS = [
  "What happens when AI performs the work people once used to learn?",
  "What does “qualified” mean when everyone has access to intelligence?",
  "How do you prove what you can do when AI can produce the same artifact?",
  "What should universities prepare students for when jobs themselves are changing?",
];

export function FramingQuestion() {
  return (
    <section className="bg-paper py-28 text-ink md:py-40">
      <div className="container-editorial">
        <Reveal>
          <SectionLabel index="01" label="The Question" />
        </Reveal>

        <Reveal delay={1}>
          <h2 className="text-balance mt-8 max-w-4xl font-sans text-display-2 font-light leading-[1.05]">
            We are not trying to predict the future.
            <br />
            <span className="text-steel">We are trying to make it discussable.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12">
          <Reveal delay={2} className="md:col-span-5 md:col-start-8">
            <p className="text-balance text-edit font-light leading-relaxed text-ink/70">
              Artificial intelligence is changing not only how people work,
              but what counts as expertise, experience, authorship, trust,
              and readiness.
            </p>
            <p className="mt-6 text-balance text-edit font-light leading-relaxed text-ink/70">
              Universities currently prepare students for careers based on
              assumptions about how work functions today. But what happens
              when those assumptions change?
            </p>
          </Reveal>
        </div>

        <div className="mt-28 flex flex-col gap-16 md:mt-36">
          {STATEMENTS.map((statement, i) => (
            <Reveal
              key={statement}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className={i % 2 === 0 ? "md:pr-[18%]" : "md:pl-[18%] md:text-right"}
            >
              <div
                className={`flex items-start gap-6 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <span className="label-mono pt-2 text-ink/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-balance font-sans text-display-3 font-light leading-[1.12] text-ink">
                  {statement}
                </p>
              </div>
              <span className="rule mt-10 block text-ink" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
