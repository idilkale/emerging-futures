export function Hero() {
  return (
    <section
      id="hero"
      className="atmosphere grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden text-paper"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-steel/20 blur-[100px] animate-[drift_22s_ease-in-out_infinite]" />
        <div className="absolute right-[10%] top-[45%] h-96 w-96 rounded-full bg-signal/10 blur-[120px] animate-[drift_26s_ease-in-out_infinite_reverse]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,16,0.1)_0%,rgba(10,12,16,0.55)_75%,rgba(10,12,16,0.9)_100%)]" />
      </div>

      <div className="container-editorial relative pb-20 pt-40 md:pb-28">
        <div className="mb-8 label-mono text-paper/50">
          Emerging Futures — Speculative Design Study
        </div>

        <h1 className="text-balance max-w-5xl font-sans text-display-1 font-light leading-[0.98] tracking-tight">
          How will students prepare for careers when the meaning of work
          itself is changing?
        </h1>

        <p className="mt-10 max-w-xl text-balance text-edit font-light leading-relaxed text-paper/70">
          Four possible futures exploring how artificial intelligence could
          reshape education, employment, human value, and career readiness.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <a
            href="#futures"
            className="label-mono group inline-flex items-center gap-3 rounded-full border border-paper/30 px-6 py-3 text-paper transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink"
          >
            Explore the Futures
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div className="mt-24 flex flex-col gap-1 border-t border-paper/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono text-paper/40">
            Emerging Futures Studio · University Design Institute
          </p>
          <p className="label-mono text-paper/40">2026</p>
        </div>
      </div>
    </section>
  );
}
