import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";

const SHRINKING = new Set([
  "Arizona",
  "New Mexico",
  "Nevada",
  "Texas",
  "Louisiana",
  "Mississippi",
  "Alabama",
  "Florida",
  "South Carolina",
  "New Jersey",
]);

const GROWING = new Set([
  "Michigan",
  "Wisconsin",
  "Illinois",
  "Indiana",
  "Ohio",
  "Minnesota",
  "Iowa",
  "North Dakota",
  "South Dakota",
]);

const NEUTRAL_FILL = "#dedcd2";
const STROKE_COLOR = "#f7f7f7";
const ARROW_COLOR = "#2c2c2a";

const BREADCRUMBS = [
  "Employment follows geography",
  "People move",
  "Jobs move",
  "Education follows",
];

export function ConstraintRegionsMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mapRef.current;
    if (!container) return;
    container.innerHTML = "";

    const svg = d3
      .select(container)
      .append("svg")
      .attr("viewBox", "0 0 975 700")
      .attr("width", "100%");

    const defs = svg.append("defs");
    defs
      .append("marker")
      .attr("id", "mig-arrow")
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 8)
      .attr("refY", 5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto-start-reverse")
      .append("path")
      .attr("d", "M2 1L8 5L2 9")
      .attr("fill", "none")
      .attr("stroke", ARROW_COLOR)
      .attr("stroke-width", 1.8)
      .attr("stroke-linecap", "round")
      .attr("stroke-linejoin", "round");

    const path = d3.geoPath();
    const statesLayer = svg.append("g").attr("transform", "translate(0, 45)");
    const arrowLayer = svg.append("g").attr("transform", "translate(0, 45)");

    let cancelled = false;

    d3.json<Topology>("https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json").then(
      (us) => {
        if (cancelled || !us) return;
        const featureCollection = feature(us, us.objects.states) as unknown as {
          features: (GeoJSON.Feature & { properties: { name: string } })[];
        };
        const features = featureCollection.features;
        const byName: Record<string, GeoJSON.Feature> = {};
        features.forEach((f) => {
          byName[f.properties.name] = f;
        });

        statesLayer
          .selectAll("path")
          .data(features)
          .join("path")
          .attr("d", path)
          .attr("stroke", STROKE_COLOR)
          .attr("stroke-width", 1.5)
          .attr("fill", (d) => {
            const name = (d as { properties: { name: string } }).properties.name;
            if (SHRINKING.has(name)) return "#8c1d40";
            if (GROWING.has(name)) return "#78be20";
            return NEUTRAL_FILL;
          });

        const centroidOf = (name: string) => {
          const f = byName[name];
          return f ? path.centroid(f as never) : null;
        };

        const flows: [string, string][] = [
          ["Arizona", "Minnesota"],
          ["Texas", "Michigan"],
          ["Florida", "Wisconsin"],
        ];

        flows.forEach(([from, to]) => {
          const c1 = centroidOf(from);
          const c2 = centroidOf(to);
          if (!c1 || !c2) return;
          const mx = (c1[0] + c2[0]) / 2;
          const my = (c1[1] + c2[1]) / 2 - 90;
          arrowLayer
            .append("path")
            .attr("d", `M${c1[0]},${c1[1]} Q${mx},${my} ${c2[0]},${c2[1]}`)
            .attr("fill", "none")
            .attr("stroke", ARROW_COLOR)
            .attr("stroke-width", 2.5)
            .attr("stroke-dasharray", "5 5")
            .attr("marker-end", "url(#mig-arrow)");
        });
      }
    );

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="rounded-xl border border-ink/10 bg-paper-dim p-6 md:p-8">
      <div className="mb-4 flex items-center gap-5 text-xs text-ink/60">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[#8c1d40]" />
          Shrinking regions
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[#78be20]" />
          Growth regions
        </span>
      </div>

      <div ref={mapRef} className="w-full py-2" />

      <div className="mt-6 flex flex-wrap justify-between gap-6">
        <div className="min-w-[180px] flex-1">
          <p className="mb-2 text-sm font-medium text-[#8c1d40]">Declining industries</p>
          <p className="text-xs leading-[1.8] text-ink/60">
            Traditional farming
            <br />
            Tourism
            <br />
            Insurance jobs
          </p>
        </div>
        <div className="min-w-[180px] flex-1 text-right">
          <p className="mb-2 text-sm font-medium text-[#4f7a0f]">Growing industries</p>
          <p className="text-xs leading-[1.8] text-ink/60">
            Vertical farming
            <br />
            Renewable energy
            <br />
            Infrastructure
            <br />
            Relocation services
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] text-ink/60">
        {BREADCRUMBS.map((crumb, i) => (
          <span key={crumb} className="flex items-center gap-2">
            <span className="whitespace-nowrap rounded-md border border-ink/15 bg-paper px-2.5 py-2">
              {crumb}
            </span>
            {i < BREADCRUMBS.length - 1 && <span aria-hidden="true">→</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
