import { AnimatePresence, motion } from "framer-motion";
import { useEffect, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { asset } from "../lib/asset";
import type { Persona } from "../data/types";

interface PersonaModalProps {
  persona: Persona | null;
  onClose: () => void;
}

export function PersonaModal({ persona, onClose }: PersonaModalProps) {
  useEffect(() => {
    if (!persona) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [persona, onClose]);

  return createPortal(
    <AnimatePresence>
      {persona && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-paper shadow-2xl md:flex-row"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors duration-300 hover:border-paper md:text-ink md:border-ink/20 md:hover:border-ink"
            >
              ✕
            </button>

            {/* front */}
            <div
              className="flex shrink-0 flex-col justify-between overflow-y-auto bg-navy p-8 md:w-[38%] md:p-10"
              style={{ "--pcolor": persona.color } as CSSProperties}
            >
              <div>
                <div className="label-mono flex items-center justify-between text-paper/70">
                  <span>
                    {persona.age}, {persona.aiRelationship}
                  </span>
                </div>
                <span className="mt-3 block h-px w-full bg-[var(--pcolor)]" />
                <p className="label-mono mt-3 text-paper/50">{persona.identity}</p>
              </div>

              <img
                src={asset(persona.photo)}
                alt={persona.name}
                className="my-8 aspect-square w-full rounded-xl object-cover"
              />

              <div>
                <div className="font-sans text-2xl font-normal text-paper md:text-3xl">{persona.name}</div>
                <div className="mt-1 inline-block font-sans text-xl font-normal text-ink md:text-2xl">
                  <span className="text-paper">The </span>
                  <span className="bg-[var(--pcolor)] px-1.5">{persona.archetype.replace(/^The /, "")}</span>
                </div>
              </div>
            </div>

            {/* back */}
            <div className="flex-1 overflow-y-auto p-8 md:p-10">
              <dl className="flex flex-col gap-6">
                <div>
                  <dt className="label-mono text-ink/40">Background</dt>
                  <dd className="mt-2 text-copy leading-relaxed text-ink/75">{persona.background}</dd>
                </div>
                <div>
                  <dt className="label-mono text-ink/40">Finances</dt>
                  <dd className="mt-2 text-copy leading-relaxed text-ink/75">{persona.finances}</dd>
                </div>
                <div>
                  <dt className="label-mono text-ink/40">Worldview</dt>
                  <dd className="mt-2 text-copy leading-relaxed text-ink/75">{persona.worldview}</dd>
                </div>
                <div>
                  <dt className="label-mono text-ink/40">Strengths</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {persona.strengths.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-ink/10 bg-paper-dim px-3 py-1 text-sm text-ink/75"
                      >
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="label-mono text-ink/40">Biggest fear</dt>
                  <dd className="mt-2 text-copy leading-relaxed text-ink/75">{persona.biggestFear}</dd>
                </div>
                <div>
                  <dt className="label-mono text-ink/40">Success looks like</dt>
                  <dd className="mt-2 text-copy leading-relaxed text-ink/75">{persona.successLooksLike}</dd>
                </div>
              </dl>

              <span className="mt-8 block h-px w-full" style={{ background: persona.color }} />

              <div className="mt-8">
                <p className="label-mono text-ink/40">In their shoes</p>
                <p className="mt-2 text-balance font-sans text-lg leading-snug text-ink">{persona.inTheirShoes}</p>
              </div>

              <div className="relative mt-6 rounded-xl bg-navy p-6 pl-12 text-paper">
                <span className="absolute left-4 top-3 font-sans text-3xl leading-none text-paper/40">
                  &ldquo;
                </span>
                <p className="text-balance text-copy italic leading-relaxed text-paper/85">{persona.quote}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
