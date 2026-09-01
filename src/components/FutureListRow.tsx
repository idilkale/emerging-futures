import { Link } from "react-router-dom";
import type { Future } from "../data/types";

export function FutureListRow({ future }: { future: Future }) {
  const Icon = future.icon;

  return (
    <div className="relative mt-4 first:mt-0">
      <Link
        to={`/futures/${future.slug}`}
        className="group relative flex items-center gap-5 rounded-xl border border-paper/10 bg-navy p-6 transition-colors duration-300 hover:border-explorer-cyan/50 md:gap-8 md:p-7"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paper text-navy transition-colors duration-300 group-hover:bg-explorer-cyan group-hover:text-paper">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>

        <div className="min-w-0 flex-1">
          <div className="label-mono text-paper">{future.codename}</div>
          <p className="mt-2 text-balance text-sm leading-relaxed text-paper/55">
            {future.tagline}
          </p>
          <p className="mt-1 text-balance text-sm font-medium leading-relaxed text-paper/85">
            {future.homeQuestion}
          </p>
        </div>

        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-paper/25 text-paper transition-all duration-300 group-hover:border-explorer-cyan group-hover:text-explorer-cyan">
          →
        </span>
      </Link>
    </div>
  );
}
