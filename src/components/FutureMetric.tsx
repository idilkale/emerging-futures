interface FutureMetricProps {
  label: string;
  value: number;
  accent: string;
  tone?: "dark" | "light";
}

export function FutureMetric({ label, value, accent, tone = "dark" }: FutureMetricProps) {
  return (
    <div>
      <div
        className={[
          "label-mono mb-2 flex items-center justify-between",
          tone === "dark" ? "text-ink/45" : "text-paper/45",
        ].join(" ")}
      >
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div
        className={[
          "h-[3px] w-full overflow-hidden rounded-full",
          tone === "dark" ? "bg-ink/10" : "bg-paper/15",
        ].join(" ")}
      >
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, background: accent }}
        />
      </div>
    </div>
  );
}
