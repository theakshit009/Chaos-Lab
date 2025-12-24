// src/components/chaos-config/PresetCard.tsx

interface Preset {
  id: string;
  name: string;
  description: string;
  configSummary: string;
}

interface PresetCardProps {
  preset: Preset;
  onLoad: (presetId: string) => void;
}

const PresetCard = ({ preset, onLoad }: PresetCardProps) => {
  return (
    <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl p-4 flex flex-col justify-between gap-3 hover:border-cyan-500/60 hover:bg-[#0f0f1f] transition">
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-zinc-100">
          {preset.name}
        </h3>
        <p className="text-xs text-zinc-500">{preset.description}</p>
        <p className="text-[11px] text-zinc-400 mt-1">
          {preset.configSummary}
        </p>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => onLoad(preset.id)}
          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 border border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:border-cyan-500/60 hover:text-cyan-300 transition"
        >
          Load Preset
        </button>
      </div>
    </div>
  );
};

export type { Preset };
export default PresetCard;
