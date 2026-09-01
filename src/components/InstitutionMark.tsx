import { Link } from "react-router-dom";
import { asset } from "../lib/asset";

interface InstitutionMarkProps {
  tone?: "dark" | "light";
}

export function InstitutionMark({ tone = "dark" }: InstitutionMarkProps) {
  if (tone === "light") {
    return (
      <Link to="/" className="flex items-center">
        <img
          src={asset("ASU_University_Design_Institute_2_Horiz_RGB_White_150ppi%201.png")}
          alt="ASU University Design Institute — Arizona State University"
          className="h-9 w-auto"
        />
      </Link>
    );
  }

  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-asu-maroon">
        <span className="font-sans text-xs font-bold tracking-tight text-paper">
          ASU
        </span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-xs font-semibold text-ink">University Design Institute</span>
        <span className="text-[11px] text-steel">Arizona State University</span>
      </span>
    </Link>
  );
}
