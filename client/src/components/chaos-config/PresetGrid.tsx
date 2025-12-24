// src/components/chaos-config/PresetGrid.tsx

import PresetCard, { type Preset } from "./PresetCard";

// Temporary mock presets – later fetch from backend
const PRESETS: Preset[] = [
  {
    id: "normal",
    name: "Normal",
    description: "No chaos. Baseline behaviour for comparison.",
    configSummary: "Latency 0ms · Error 0% · DB 0ms · Packet 0%",
  },
  {
    id: "high-latency",
    name: "High Latency",
    description: "Simulates slow network conditions.",
    configSummary: "Latency 1500ms · Error 0% · DB 0ms · Packet 0%",
  },
  {
    id: "db-slow",
    name: "DB Slowdown",
    description: "Simulates overloaded or sluggish database.",
    configSummary: "Latency 200ms · DB 1200ms · Error 0%",
  },
  {
    id: "unreliable-network",
    name: "Unreliable Network",
    description: "Frequent packet drops and moderate latency.",
    configSummary: "Latency 600ms · Packet 25% · Error 5%",
  },
];

interface PresetGridProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onApplyPreset?: (config: any) => void;
}

const PresetGrid = ({ onApplyPreset }: PresetGridProps) => {
  const handleLoadPreset = (presetId: string) => {
    // later you can map ID -> actual config
    if (!onApplyPreset) return;

    switch (presetId) {
      case "normal":
        onApplyPreset({
          latencyMs: 0,
          apiCrashRate: 0,
          dbDelayMs: 0,
          packetDrop: 0,
          cpuSpike: false,
          cpuSpikeDurationMs: 0,
        });
        break;
      case "high-latency":
        onApplyPreset({
          latencyMs: 1500,
          apiCrashRate: 0,
          dbDelayMs: 0,
          packetDrop: 0,
          cpuSpike: false,
        });
        break;
      case "db-slow":
        onApplyPreset({
          latencyMs: 200,
          apiCrashRate: 0,
          dbDelayMs: 1200,
          packetDrop: 0,
          cpuSpike: false,
        });
        break;
      case "unreliable-network":
        onApplyPreset({
          latencyMs: 600,
          apiCrashRate: 5,
          dbDelayMs: 0,
          packetDrop: 25,
          cpuSpike: false,
        });
        break;
      default:
        break;
    }
  };

  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-medium text-zinc-200">
          Saved Presets
        </h2>
        <p className="text-[11px] text-zinc-500">
          Quickly switch between common chaos scenarios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {PRESETS.map((preset) => (
          <PresetCard
            key={preset.id}
            preset={preset}
            onLoad={handleLoadPreset}
          />
        ))}
      </div>
    </section>
  );
};

export default PresetGrid;
