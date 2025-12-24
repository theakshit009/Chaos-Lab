import ChaosSliderCard from "./ChaosSliderCard";
import CpuSpikeCard from "./CpuSpikeCard";

const ChaosForm = () => {
  // local state or useChaosConfig hook
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <ChaosSliderCard
        title="Latency"
        description="Introduces artificial delay in network requests to simulate slow connections."
        unit="ms"
        min={0}
        max={3000}
        field="latencyMs"
      />
      <ChaosSliderCard
        title="API Error Rate"
        description="Injects HTTP 500 errors into API responses to test resilience."
        unit="%"
        min={0}
        max={100}
        field="apiErrorRate"
      />
      <ChaosSliderCard
        title="Database Delay"
        description="Adds latency to database queries, simulating an overloaded or slow database."
        unit="ms"
        min={0}
        max={2000}
        field="dbDelayMs"
      />
      <ChaosSliderCard
        title="Packet Drop"
        description="Randomly drops network packets, simulating unreliable conditions."
        unit="%"
        min={0}
        max={100}
        field="packetDrop"
      />
      <CpuSpikeCard />

      <div className="md:col-span-2 xl:col-span-3 flex justify-end gap-3 mt-2">
        <button className="px-4 py-2 rounded-lg border border-zinc-700 text-sm text-zinc-300 hover:bg-zinc-800">
          Reset to Normal
        </button>
        <button className="px-4 py-2 rounded-lg bg-cyan-500 text-sm font-medium text-zinc-950 hover:bg-cyan-400">
          Apply Chaos
        </button>
      </div>
    </div>
  );
};

export default ChaosForm;
