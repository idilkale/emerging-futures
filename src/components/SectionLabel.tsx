interface SectionLabelProps {
  index: string;
  label: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}

export function SectionLabel({
  index,
  label,
  tone = "dark",
  align = "left",
}: SectionLabelProps) {
  return (
    <div
      className={[
        "flex items-center gap-3",
        align === "center" ? "justify-center" : "justify-start",
        tone === "dark" ? "text-ink/50" : "text-paper/55",
      ].join(" ")}
    >
      <span className="label-mono">{index}</span>
      <span className="h-px w-8 bg-current opacity-40" />
      <span className="label-mono">{label}</span>
    </div>
  );
}
