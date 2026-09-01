import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Index", href: "#hero" },
  { label: "Futures", href: "#futures" },
  { label: "Map", href: "#map" },
  { label: "Personas", href: "#personas" },
  { label: "Provocations", href: "#provocations" },
  { label: "About", href: "#about" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-ink/85 backdrop-blur-md border-b border-paper/10"
          : "bg-gradient-to-b from-ink/60 to-transparent",
      ].join(" ")}
    >
      <nav className="container-editorial flex h-[68px] items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="relative flex h-6 w-6 items-center justify-center rounded-full border border-paper/70">
            <span className="h-1 w-1 rounded-full bg-signal" />
          </span>
          <span className="label-mono text-paper/85">Emerging Futures</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="label-mono text-paper/60 transition-colors duration-300 hover:text-paper"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-5 bg-paper transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-paper transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-paper/10 bg-ink px-[var(--container-pad)] py-8 md:hidden">
          <ul className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="label-mono text-paper/70 text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
