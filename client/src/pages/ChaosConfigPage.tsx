import ChaosForm from "../components/chaos-config/ChaosForm";
import PresetGrid from "../components/chaos-config/PresetGrid";

const ChaosConfigPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">
          Chaos Configuration
        </h1>
        <span className="px-3 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
          Chaos: ACTIVE
        </span>
      </div>

      <ChaosForm />

      <PresetGrid />
    </div>
  );
};

export default ChaosConfigPage;
