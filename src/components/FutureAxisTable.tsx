import { axisComparisonRows } from "../data/axisComparison";
import { getFutureAccent, hexToRgba } from "../data/futureAccents";

const COLUMNS: { slug: string; key: "growth" | "collapse" | "constraint" | "transformation"; label: string }[] = [
  { slug: "growth", key: "growth", label: "GROWTH" },
  { slug: "collapse", key: "collapse", label: "COLLAPSE" },
  { slug: "constraint", key: "constraint", label: "CONSTRAINT" },
  { slug: "transformation", key: "transformation", label: "TRANSFORM" },
];

export function FutureAxisTable({ activeSlug }: { activeSlug: string }) {
  const accent = getFutureAccent(activeSlug);

  return (
    <div className="overflow-x-auto rounded-xl border border-ink/10">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr>
            <th className="label-mono bg-navy w-[26%] px-4 py-3 font-normal text-paper/60">Axis</th>
            {COLUMNS.map((col) => {
              const isActive = col.slug === activeSlug;
              return (
                <th
                  key={col.slug}
                  className="label-mono px-4 py-3 font-normal text-paper"
                  style={isActive ? { backgroundColor: accent } : { backgroundColor: "#272f42" }}
                >
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {axisComparisonRows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 1 ? "bg-paper-dim/40" : undefined}>
              <td className="border-b border-ink/10 px-4 py-4 text-sm font-normal text-ink">
                {row.label}
              </td>
              {COLUMNS.map((col) => {
                const isActive = col.slug === activeSlug;
                return (
                  <td
                    key={col.slug}
                    className={[
                      "border-b border-ink/10 px-4 py-4 text-sm font-normal leading-snug",
                      isActive ? "text-ink" : "text-ink/60",
                    ].join(" ")}
                    style={isActive ? { backgroundColor: hexToRgba(accent, 0.14) } : undefined}
                  >
                    {row[col.key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
