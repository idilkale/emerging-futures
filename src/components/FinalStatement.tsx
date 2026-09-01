import { Reveal } from "./Reveal";

export function FinalStatement() {
  return (
    <section className="atmosphere grain relative flex min-h-[90svh] items-center overflow-hidden text-paper">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-steel/15 blur-[140px]" />
      </div>

      <div className="container-editorial relative py-32">
        <Reveal>
          <p className="label-mono mb-10 text-paper/45">10 — Closing</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="text-balance max-w-4xl font-sans text-display-1 font-light leading-[0.98]">
            The future is not something we prepare students to enter.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-10 max-w-xl text-balance text-edit font-light leading-relaxed text-paper/65">
            It is something we prepare them to shape. The choices institutions
            make today will decide what students are able to become tomorrow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
