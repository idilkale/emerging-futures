const FUTURE_UI_ACCENTS: Record<string, string> = {
  growth: "#af674b",
  collapse: "#e74973",
  constraint: "#747474",
  transformation: "#4ab7c4",
};

const DEFAULT_UI_ACCENT = "#00a3e0";

export const getFutureAccent = (slug: string) => FUTURE_UI_ACCENTS[slug] ?? DEFAULT_UI_ACCENT;

export const hexToRgba = (hex: string, alpha: number) => {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
