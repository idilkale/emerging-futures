import { Link } from "react-router-dom";
import type { Future } from "../data/types";

interface FutureFolderProps {
  future: Future;
  isOpen: boolean;
  onToggle: () => void;
}

function FuturePin({ future }: { future: Future }) {
  const Icon = future.icon;
  return (
    <div className="relative h-16 w-16 [filter:drop-shadow(0_6px_14px_rgba(0,0,0,0.35))]">
      <div
        className="absolute inset-0 rounded-[50%_50%_50%_0] border-2 border-paper/70 bg-navy-light"
        style={{ transform: "rotate(-45deg)" }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-paper">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
    </div>
  );
}

export function FutureFolder({ future, isOpen, onToggle }: FutureFolderProps) {
  const Icon = future.icon;

  return (
    <div className="relative mt-8 first:mt-0">
      <span
        className="absolute -top-3 left-8 h-4 w-28 rounded-t-md transition-colors duration-300"
        style={{ background: isOpen ? "#00a3e0" : "#1c2333" }}
      />
      <div
        className="relative overflow-hidden rounded-xl border transition-colors duration-300"
        style={{
          borderColor: isOpen ? "#00a3e0" : "rgba(255,255,255,0.1)",
          background: "#272f42",
        }}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-9"
        >
          <div className="flex items-center gap-3">
            <Icon className="h-4 w-4 shrink-0 text-paper/70" strokeWidth={1.75} />
            <span className="label-mono text-paper">{future.shortTitle}</span>
          </div>
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-paper transition-transform duration-500 ${
              isOpen ? "rotate-45" : ""
            }`}
            style={{ borderColor: isOpen ? "#00a3e0" : "rgba(244,241,234,0.25)" }}
          >
            +
          </span>
        </button>

        <div
          className={`grid transition-all duration-500 ease-editorial ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="relative min-h-[280px] border-t border-paper/10 px-6 py-8 md:min-h-[320px] md:px-9">
              <h4 className="max-w-md text-balance font-sans text-xl font-medium text-paper md:text-2xl">
                {future.title}
              </h4>
              <span className="mt-3 block h-px w-full max-w-xl bg-paper/15" />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/50">
                {future.tagline}
              </p>
              <Link
                to={`/futures/${future.slug}`}
                className="label-mono mt-6 inline-flex items-center gap-2 rounded-full bg-explorer-cyan px-5 py-2.5 text-ink transition-opacity hover:opacity-90"
              >
                Explore future
                <span aria-hidden="true">→</span>
              </Link>

              <div className="pointer-events-none absolute bottom-8 right-8 md:bottom-10 md:right-16">
                <FuturePin future={future} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
