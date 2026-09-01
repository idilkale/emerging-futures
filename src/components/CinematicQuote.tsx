import { Reveal } from "./Reveal";

interface CinematicQuoteProps {
  quote: string;
  name: string;
  role: string;
}

export function CinematicQuote({ quote, name, role }: CinematicQuoteProps) {
  return (
    <section className="atmosphere-cool grain relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute -left-24 top-1/2 h-[70%] w-40 -translate-y-1/2 rounded-full bg-steel/10 blur-3xl" />
      <div className="container-editorial relative">
        <Reveal>
          <p className="text-balance max-w-4xl font-sans text-display-3 font-light leading-[1.15] text-paper">
            &ldquo;{quote}&rdquo;
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-16 bg-paper/40" />
            <div className="label-mono text-paper/60">
              <div className="text-paper/85">{name}</div>
              <div>{role}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
