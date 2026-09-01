import type { CSSProperties } from "react";
import type { Persona } from "../data/types";
import { asset } from "../lib/asset";

export function PersonaPicker({ personas }: { personas: Persona[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3">
      {personas.map((persona) => {
        const colorVars = {
          "--pcolor": persona.color,
          "--pcolor-glow": `${persona.color}66`,
        } as CSSProperties;

        return (
          <div key={persona.id} className="group relative" style={colorVars}>
            <span
              className="absolute -top-3 left-6 h-4 w-16 rounded-t-md"
              style={{ background: persona.color }}
            />
            <div className="relative flex flex-col overflow-hidden rounded-xl border border-paper/10 bg-navy transition-all duration-300 group-hover:border-[var(--pcolor)] group-hover:bg-navy-light group-hover:shadow-[0_0_0_1px_var(--pcolor-glow)]">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <img
                    src={asset(persona.photo)}
                    alt={persona.name}
                    className="h-24 w-24 shrink-0 rounded-full object-cover"
                  />
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-paper/20 text-paper/40 transition-colors duration-300 group-hover:border-[var(--pcolor)] group-hover:text-[var(--pcolor)]">
                    ↗
                  </span>
                </div>

                <div className="mt-8">
                  <div className="font-sans text-xl font-bold text-paper md:text-2xl">
                    {persona.name}, {persona.age}
                  </div>
                  <span
                    className="mt-2 block h-[3px] w-full rounded-full"
                    style={{ background: persona.color }}
                  />
                  <div className="mt-2 text-sm text-paper/50">{persona.archetype}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
