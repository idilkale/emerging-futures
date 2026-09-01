import { InstitutionMark } from "./InstitutionMark";

export function FuturePageFooter() {
  return (
    <footer className="border-t border-paper/15 bg-navy py-10">
      <div className="container-editorial flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <InstitutionMark tone="light" />
        <p className="label-mono text-paper/40">Emerging Futures Studio 2026</p>
      </div>
    </footer>
  );
}
