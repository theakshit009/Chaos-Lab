import { Link } from "react-router-dom";
// import { useChaosConfig } from "../../hooks/useChaosConfig";

const ActiveChaosCard = () => {
  // TODO: yahan se real data lao
  // const { config, loading } = useChaosConfig();

  // Temporary mock data (jab tak backend ready nahi)
  const config = {
    latencyMs: 500,
    apiCrashRate: 5,
    dbDelayMs: 200,
    packetDrop: 0,
  };

  // const isActive = !!config && (
  //   config.latencyMs > 0 ||
  //   config.apiCrashRate > 0 ||
  //   config.dbDelayMs > 0 ||
  //   config.packetDrop > 0
  // );

  return (
    <section className="mt-4 bg-[#0b0b16] border border-zinc-800 rounded-2xl px-5 py-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-medium text-zinc-200">
          Active Chaos Configuration
        </h2>

        <Link
          to="/chaos-config"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300 hover:bg-zinc-800/70 transition-colors"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 text-[10px]">
            ⚙
          </span>
          View / Edit Config
        </Link>
      </div>

      {/* Values row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-wide text-zinc-500">
            Latency
          </span>
          <span className="mt-1 text-zinc-100 font-medium">
            {config.latencyMs} ms
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-wide text-zinc-500">
            API Crash Rate
          </span>
          <span className="mt-1 text-zinc-100 font-medium">
            {config.apiCrashRate}%
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-wide text-zinc-500">
            DB Delay
          </span>
          <span className="mt-1 text-zinc-100 font-medium">
            {config.dbDelayMs} ms
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-wide text-zinc-500">
            Packet Drop
          </span>
          <span className="mt-1 text-zinc-100 font-medium">
            {config.packetDrop}%
          </span>
        </div>
      </div>
    </section>
  );
};

export default ActiveChaosCard;
