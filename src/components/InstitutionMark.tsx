import { Link } from "react-router-dom";
import { asset } from "../lib/asset";

interface InstitutionMarkProps {
  tone?: "dark" | "light";
}

export function InstitutionMark({ tone = "dark" }: InstitutionMarkProps) {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={asset("udi-logo.png")}
        alt="ASU University Design Institute — Arizona State University"
        className={`h-9 w-auto ${tone === "dark" ? "brightness-0" : ""}`}
      />
    </Link>
  );
}
