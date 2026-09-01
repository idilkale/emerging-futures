import { Link } from "react-router-dom";
import { futures } from "../data/futures";
import { InstitutionMark } from "./InstitutionMark";

interface FutureTopNavProps {
  activeSlug: string;
}

export function FutureTopNav({ activeSlug }: FutureTopNavProps) {
  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="container-editorial flex h-16 items-center justify-between border-b border-paper/10">
        <InstitutionMark tone="light" />
      </div>
      <nav className="container-editorial flex h-11 items-center gap-8 border-b border-paper/10 overflow-x-auto">
        {futures.map((future) => {
          const isActive = future.slug === activeSlug;
          return (
            <Link
              key={future.id}
              to={`/futures/${future.slug}`}
              className={[
                "label-mono relative shrink-0 py-3 transition-colors duration-300",
                isActive ? "text-paper" : "text-paper/40 hover:text-paper/70",
              ].join(" ")}
            >
              {future.codename}
              {isActive && (
                <span className="absolute inset-x-0 -bottom-px h-[2px] bg-paper" />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
