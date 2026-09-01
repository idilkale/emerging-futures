import type { FutureVoice } from "../data/types";

export function FutureVoices({ voices }: { voices: FutureVoice[] }) {
  return (
    <div className="flex flex-col gap-10">
      {voices.map((voice) => {
        const initials = voice.name
          .split(" ")
          .map((p) => p[0])
          .filter(Boolean)
          .slice(0, 2)
          .join("");
        return (
          <div key={voice.role} className="border-t border-ink/10 pt-8">
            <p className="label-mono mb-3 text-ink/40">{voice.role}</p>
            <p className="text-balance text-copy leading-relaxed text-ink/80">
              &ldquo;{voice.quote}&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper-dim text-xs font-medium text-ink/60">
                {initials}
              </span>
              <p className="text-sm text-ink/50">
                <span className="font-medium text-ink/80">{voice.name}</span>
                {" — "}
                {voice.context}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
