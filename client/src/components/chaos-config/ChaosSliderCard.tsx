import React, { useState } from "react";

interface ChaosSliderCardProps {
  title: string;
  description: string;
  unit: string;
  min: number;
  max: number;
  field: string; // example: "latencyMs"
  value?: number;
  onChange?: (field: string, value: number) => void;
}

const ChaosSliderCard = ({
  title,
  description,
  unit,
  min,
  max,
  field,
  value = 0,
  onChange = () => {},
}: ChaosSliderCardProps) => {
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setLocalValue(v);
    onChange(field, v);
  };

  return (
    <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl p-4 flex flex-col gap-3">
      {/* Title + value */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-zinc-200">{title}</h3>
        <span className="text-sm text-cyan-400 font-medium">
          {localValue} {unit}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>

      {/* Slider */}
      <input
        type="range"
        min={min}
        max={max}
        value={localValue}
        onChange={handleChange}
        className="w-full accent-cyan-500 cursor-pointer"
      />

      {/* Min / Max Labels */}
      <div className="flex justify-between text-[10px] text-zinc-500 uppercase tracking-wide">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
};

export default ChaosSliderCard;
