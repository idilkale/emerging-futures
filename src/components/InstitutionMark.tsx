import { Link } from "react-router-dom";
import { asset } from "../lib/asset";

interface InstitutionMarkProps {
  tone?: "dark" | "light";
}

export function InstitutionMark({ tone = "dark" }: InstitutionMarkProps) {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={asset("ASU_University_Design_Institute_2_Horiz_RGB_White_150ppi%201.png")}
        alt="ASU University Design Institute — Arizona State University"
        className={`h-9 w-auto ${tone === "dark" ? "brightness-0" : ""}`}
      />
    </Link>
  );
}
