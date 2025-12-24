// src/components/chaos-config/CpuSpikeCard.tsx

import React, { useState } from "react";

interface CpuSpikeCardProps {
  fieldEnabled?: string;
  fieldDuration?: string;
  enabled?: boolean;
  duration?: number;
  onChange?: (field: string, value: boolean | number) => void;
}

const CpuSpikeCard = ({
  fieldEnabled = "cpuSpike",
  fieldDuration = "cpuSpikeDurationMs",
  enabled = false,
  duration = 1000,
  onChange = () => {},
}: CpuSpikeCardProps) => {
  const [isEnabled, setIsEnabled] = useState(enabled);
  const [localDuration, setLocalDuration] = useState(duration);

  const toggle = () => {
    setIsEnabled(!isEnabled);
    onChange(fieldEnabled, !isEnabled);
  };

  const updateDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setLocalDuration(value);
    onChange(fieldDuration, value);
  };

  return (
    <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl p-4 flex flex-col gap-3">
      {/* Title + toggle */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-zinc-200">CPU Spike</h3>

        <button
          onClick={toggle}
          className={`w-10 h-5 rounded-full flex items-center ${
            isEnabled ? "bg-cyan-500" : "bg-zinc-700"
          }`}
        >
          <span
            className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
              isEnabled ? "translate-x-5" : ""
            }`}
          />
        </button>
      </div>

      {/* Description */}
      <p className="text-xs text-zinc-500">
        Forces CPU load by running busy loops for a specified duration.
      </p>

      {/* Duration Input (only if enabled) */}
      {isEnabled && (
        <div className="flex items-center justify-between">
          <label className="text-xs text-zinc-400">Duration:</label>
          <input
            type="number"
            value={localDuration}
            onChange={updateDuration}
            className="w-24 px-2 py-1 bg-zinc-900 border border-zinc-700 rounded text-sm text-zinc-200"
          />
          <span className="text-xs text-zinc-500 ml-1">ms</span>
        </div>
      )}
    </div>
  );
};

export default CpuSpikeCard;
