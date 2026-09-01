import { useState } from "react";
import type { Provocation } from "../data/types";

export function ProvocationCard({ provocation, index }: { provocation: Provocation; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      onClick={() => setFlipped((v) => !v)}
      className="group relative aspect-[4/5] w-full text-left [perspective:1400px]"
      aria-pressed={flipped}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* front */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-paper/15 bg-navy/50 p-7 [backface-visibility:hidden]">
          <div className="flex items-center justify-between">
            <span className="label-mono text-paper/35">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="label-mono text-paper/30">Provocation</span>
          </div>
          <p className="text-balance font-sans text-xl font-light leading-snug text-paper md:text-2xl">
            {provocation.front}
          </p>
          <span className="label-mono flex items-center gap-2 text-paper/40">
            Turn over
            <span className="transition-transform duration-300 group-hover:translate-x-1">↻</span>
          </span>
        </div>

        {/* back */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-signal/30 bg-signal/10 p-7 [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="label-mono text-signal/70">Consider</span>
          <p className="text-balance font-sans text-lg font-light leading-snug text-paper md:text-xl">
            {provocation.back}
          </p>
          <span className="label-mono text-paper/40">Turn back</span>
        </div>
      </div>
    </button>
  );
}
