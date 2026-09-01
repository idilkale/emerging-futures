import type { Persona } from "../data/types";

interface PersonaDossierProps {
  persona: Persona;
  futureNote: string;
}

export function PersonaDossier({ persona, futureNote }: PersonaDossierProps) {
  return (
    <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-[180px_1fr] md:gap-10">
      <div className="flex flex-row items-center gap-4 md:flex-col md:items-start">
        <img
          src={persona.photo}
          alt={persona.name}
          className="aspect-square w-20 shrink-0 rounded-xl border border-paper/15 object-cover md:w-full"
        />
        <div className="flex flex-col gap-2">
          <span className="label-mono inline-flex w-fit items-center rounded-full bg-explorer-cyan px-3 py-1.5 text-ink">
            {persona.aiRelationship}
          </span>
          <span className="label-mono text-paper/40">
            {persona.age} · {persona.location}
          </span>
        </div>
      </div>

      <div>
        <h4 className="font-sans text-2xl font-medium text-paper md:text-3xl">
          {persona.name}
        </h4>
        <p className="label-mono mt-1 text-paper/45">{persona.role}</p>

        <ul className="mt-6 flex flex-col gap-3">
          <li className="text-sm leading-relaxed text-paper/70 md:text-base">
            <span className="font-medium text-paper">Background: </span>
            {persona.background}
          </li>
          <li className="text-sm leading-relaxed text-paper/70 md:text-base">
            <span className="font-medium text-paper">Worldview: </span>
            {persona.worldview}
          </li>
          <li className="text-sm leading-relaxed text-paper/70 md:text-base">
            <span className="font-medium text-paper">Strengths: </span>
            {persona.strengths.join(", ")}
          </li>
          <li className="text-sm leading-relaxed text-paper/70 md:text-base">
            <span className="font-medium text-paper">Biggest fear: </span>
            {persona.fears}
          </li>
        </ul>

        <div className="mt-6 border-l-2 border-explorer-cyan/60 pl-4">
          <div className="label-mono mb-1 text-explorer-cyan">In This Future</div>
          <p className="text-sm leading-relaxed text-paper/75 md:text-base">{futureNote}</p>
        </div>

        <p className="mt-6 text-balance font-sans text-base font-medium leading-snug text-paper md:text-lg">
          {persona.trustQuestion}
        </p>

        <div className="relative mt-5 rounded-xl bg-paper p-6 pl-12 text-ink">
          <span className="absolute left-4 top-4 font-sans text-3xl leading-none text-explorer-cyan">
            &ldquo;
          </span>
          <p className="text-balance text-sm italic leading-relaxed text-ink/80 md:text-base">
            {persona.quote}
          </p>
        </div>
      </div>
    </div>
  );
}
