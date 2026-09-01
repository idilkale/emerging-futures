import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  Tooltip,
} from "chart.js";
import { useEffect, useRef } from "react";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

const LABELS = ["2024", "2026", "2028", "2030", "2032", "2034", "2036"];
const DATA = [82, 70, 56, 44, 38, 30, 22];

export function GrowthIndicatorChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: LABELS,
        datasets: [
          {
            label: "Entry-level roles available",
            data: DATA,
            backgroundColor: "#af674b",
            borderRadius: 4,
            maxBarThickness: 60,
            categoryPercentage: 0.9,
            barPercentage: 0.95,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "rgba(0,0,0,0.55)" },
          },
          y: {
            title: {
              display: true,
              text: "Entry-level roles available",
              color: "#000000",
              font: { weight: "bold" },
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
    <div className="relative h-[340px] w-full rounded-xl border border-ink/10 bg-paper-dim p-6">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Bar chart showing decline of entry-level roles available from 2024 to 2036: 82%, 70%, 56%, 44%, 38%, 30%, 22%"
      />
    </div>
  );
}
