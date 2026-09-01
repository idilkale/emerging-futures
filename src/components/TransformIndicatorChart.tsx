import { asset } from "../lib/asset";

export function TransformIndicatorChart() {
  return (
    <div className="rounded-xl border border-ink/10 bg-paper-dim p-6 md:p-8">
      <img
        src={asset("Future%204%20Decision%20Funnel%201.png")}
        alt="Funnel diagram comparing why people choose to work before and after UBI: before UBI, need income, job security, prestige, benefits, to live; after UBI, seek purpose, growth, mission, community, by choice."
        className="mx-auto w-full max-w-2xl"
      />
    </div>
  );
}
