import type { FutureVoice } from "../data/types";
import { asset } from "../lib/asset";

const ROLE_ICONS: Record<string, string> = {
  Faculty: "icons/faculty.png",
  "Institutional Leader": "icons/institutional-leader.png",
  Employer: "icons/employer.png",
};

export function FutureVoices({ voices }: { voices: FutureVoice[] }) {
  return (
    <div className="flex flex-col gap-10">
      {voices.map((voice) => (
        <div key={voice.role} className="border-t border-ink/10 pt-8">
          <h3 className="mb-3 font-sans text-[32px] font-bold leading-[1.35] text-ink">
            {voice.role}
          </h3>
          <p className="border-l-2 border-ink/20 pl-5 text-balance text-copy leading-relaxed text-ink/80">
            &ldquo;{voice.quote}&rdquo;
          </p>
          <div className="mt-5 flex items-center gap-3">
            <img
              src={asset(ROLE_ICONS[voice.role])}
              alt=""
              className="h-12 w-12 shrink-0"
            />
            <p className="text-sm text-ink/50">
              <span className="font-bold text-ink">{voice.name}</span>
              {" — "}
              {voice.context}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
