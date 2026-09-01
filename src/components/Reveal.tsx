import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
}

export function Reveal({ children, delay, className = "" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={[
        "reveal",
        delay ? `reveal-delay-${delay}` : "",
        visible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
