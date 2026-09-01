import { Reveal } from "./Reveal";

const STEPS = [
  {
    index: "01",
    label: "Choose Persona",
    body: "Step into someone else's shoes.",
  },
  {
    index: "02",
    label: "Explore Futures",
    body: "Step into a new reality of your choice.",
  },
  {
    index: "03",
    label: "Bring It Back",
    body: "Return with something to question, defend, or rethink.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-paper py-20 text-ink md:py-28">
      <div className="container-editorial grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <p className="label-mono text-ink/40">How It Works</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="text-balance mt-4 font-sans text-display-3 font-medium leading-[1.05] text-ink">
              The future looks different from where you stand
            </h2>
          </Reveal>
        </div>
        <Reveal delay={2} className="md:col-span-6 md:col-start-7">
          <p className="text-balance text-copy font-light leading-relaxed text-ink/60">
            Each future is shaped by the same seven forces: what drives
            change, who decides what makes someone qualified, how quickly
            work changes, what humans and AI are each valuable at, where
            learning and formation happen, what higher education is
            ultimately for, and who bears the risk. Your persona shows how
            those changes might be experienced from a particular position in
            the system.
          </p>
        </Reveal>
      </div>

      <Reveal delay={3} className="container-editorial mt-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.index}>
              <p className="label-mono text-ink/35">
                {step.index} — {step.label.toUpperCase()}
              </p>
              <span className="mt-3 block h-px w-full bg-explorer-cyan" />
              <p className="mt-3 text-copy leading-relaxed text-ink/60">{step.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
