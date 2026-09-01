import {
  CategoryScale,
  Chart,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { useEffect, useRef } from "react";

Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

const LABELS = ["2024", "2026", "2028", "2030", "2032", "2034", "2036"];
const DATA = [47, 58, 63, 68, 76, 82, 88];

export function CollapseIndicatorChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const chart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: LABELS,
        datasets: [
          {
            label: "Percentage of increase in employer apprenticeships",
            data: DATA,
            borderColor: "#ea5d82",
            backgroundColor: "#ea5d82",
            borderWidth: 3,
            pointBackgroundColor: "#ea5d82",
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.3,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { left: 4, right: 8, top: 8, bottom: 4 } },
        plugins: { legend: { display: false } },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "rgba(0,0,0,0.55)" },
          },
          y: {
            title: {
              display: true,
              text: "Percentage of increase in employer apprenticeships",
              color: "#000000",
              font: { weight: "bold", size: 13 },
              padding: { bottom: 10 },
            },
            ticks: {
              callback: (value) => `${value}%`,
              color: "rgba(0,0,0,0.55)",
            },
            grid: { color: "rgba(0,0,0,0.08)" },
            min: 0,
            max: 100,
          },
        },
      },
    });
    return () => chart.destroy();
  }, []);

  return (
    <div className="rounded-xl border border-ink/10 bg-paper-dim p-6">
      <div className="relative h-[300px] w-full">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Line chart showing percentage increase in employer apprenticeships from 2024 to 2036: 47%, 58%, 63%, 68%, 76%, 82%, 88%"
        />
      </div>
      <p className="mt-2 text-center text-xs text-ink/40">
        Source: apprenticeship.gov/data-and-statistics
      </p>
    </div>
  );
}
