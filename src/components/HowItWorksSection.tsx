import { Reveal } from "./Reveal";

const STEPS = [
  {
    index: "01",
    label: "Select Persona",
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
      <div className="container-editorial">
        <div className="mx-auto grid max-w-[1152px] grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="label-mono !font-medium text-[#747474]">How It Works</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-balance mt-4 font-sans text-display-3 font-bold leading-[1.05] text-ink">
                The future looks different from where you stand
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={2}>
              <p className="text-copy font-normal leading-relaxed text-ink/60">
                Each future is shaped by the same seven forces: what drives
                change, who decides what makes someone qualified, how quickly
                work changes, what humans and AI are each valuable at, where
                learning and formation happen, what higher education is
                ultimately for, and who bears the risk. Your persona shows how
                those changes might be experienced from a particular learner in
                the system.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                {STEPS.map((step) => (
                  <div key={step.index} className="border-t-2 border-explorer-cyan pt-3">
                    <p className="label-mono !font-medium text-[#747474]">
                      {step.index} — {step.label.toUpperCase()}
                    </p>
                    <p className="mt-3 text-copy leading-relaxed text-ink/60">{step.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
