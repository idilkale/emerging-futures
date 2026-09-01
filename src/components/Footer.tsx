import { SectionLabel } from "./SectionLabel";

const COLUMNS: { title: string; items: string[] }[] = [
  { title: "Research", items: ["Framework", "Scenario Method", "Sources"] },
  { title: "Team", items: ["Studio Fellows", "Faculty Advisors", "Contributors"] },
  { title: "Methodology", items: ["Futures Cone", "Axes of Change", "Persona Method"] },
  { title: "Contact", items: ["General Inquiries", "Press", "Partnerships"] },
];

export function Footer() {
  return (
    <footer id="about" className="bg-ink text-paper">
      <div className="container-editorial py-24 md:py-32">
        <SectionLabel index="08" label="About / Credits" tone="light" />

        <div className="mt-10 grid grid-cols-1 gap-14 border-b border-paper/10 pb-20 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="text-display-3 font-light leading-[1.05] text-paper">
              Emerging
              <br />
              Futures Studio
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/55">
              A speculative futures exploration by the University Design
              Institute, examining how artificial intelligence may reshape
              education, work, and career readiness. Produced as a discussion
              artifact, not a forecast.
            </p>
            <p className="label-mono mt-10 text-paper/40">
              University Design Institute — 2026
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-6 md:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="label-mono mb-4 text-paper/40">{col.title}</div>
                <ul className="flex flex-col gap-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-paper/65 transition-colors hover:text-paper"
                        onClick={(e) => e.preventDefault()}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-6 pt-8 md:flex-row md:items-center">
          <p className="label-mono text-paper/35">
            © 2026 Emerging Futures Studio. Speculative content — not a forecast.
          </p>
          <p className="label-mono text-paper/35">Arizona State University</p>
        </div>
      </div>
    </footer>
  );
}
