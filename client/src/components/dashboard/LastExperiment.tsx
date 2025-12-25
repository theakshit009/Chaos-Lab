import { useExperimentsContext } from "../../hooks/useExperimentsContext";

const LastExperimentCard = () => {
  const { lastExperiment, loading } =
    useExperimentsContext();

  if (loading) {
    return (
      <div className="border border-zinc-800 rounded-xl p-4 text-zinc-400">
        Loading last experiment...
      </div>
    );
  }

  if (!lastExperiment) {
    return (
      <div className="border border-zinc-800 rounded-xl p-4 text-zinc-400">
        No experiment has been run yet.
      </div>
    );
  }

  return (
    <div className="border border-zinc-800 rounded-xl p-4">
      <h3 className="text-sm font-medium mb-2">
        Last Experiment
      </h3>

      <div className="text-sm text-zinc-300 space-y-1">
        <div>Name: {lastExperiment.name}</div>
        <div>Status: {lastExperiment.status}</div>
        <div>
          Avg Latency:{" "}
          {lastExperiment.summary?.avgLatency} ms
        </div>
        <div>
          Error Rate:{" "}
          {lastExperiment.summary?.errorRate}%
        </div>
      </div>
    </div>
  );
};

export default LastExperimentCard;
