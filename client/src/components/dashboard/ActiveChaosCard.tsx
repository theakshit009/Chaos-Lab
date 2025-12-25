import { useChaosConfig } from "../../hooks/useChaosConfig";

const ActiveChaosCard = () => {
  const { config } = useChaosConfig();

  if (!config) {
    return (
      <div className="rounded-xl border border-zinc-800 p-4 text-zinc-400">
        No active chaos configuration
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-zinc-800 p-4">
      <h3 className="text-sm font-medium mb-2">
        Active Chaos Configuration
      </h3>

      <div className="grid grid-cols-4 gap-4 text-sm text-zinc-300">
        <div>Latency: {config.latencyMs} ms</div>
        <div>API Crash: {config.apiCrashRate}%</div>
        <div>DB Delay: {config.dbDelayMs} ms</div>
        <div>Packet Drop: {config.packetDrop}%</div>
      </div>
    </div>
  );
};

export default ActiveChaosCard;
