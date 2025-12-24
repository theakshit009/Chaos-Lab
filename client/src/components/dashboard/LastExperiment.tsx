import type { Experiment } from "../../types/experiments";

const LastExperimentCard = ({
  experiment,
}: {
  experiment: Experiment | null;
}) => {
  if (!experiment) {
    return (
      <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl p-4 text-sm text-zinc-500">
        No experiment has been run yet.
      </div>
    );
  }

  return (
    <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl p-4 space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-zinc-200">
          Last Experiment
        </h3>

        <span
          className={`text-xs px-2 py-1 rounded-full ${
            experiment.status === "SUCCESS"
              ? "bg-emerald-500/20 text-emerald-400"
              : experiment.status === "FAILED"
              ? "bg-red-500/20 text-red-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {experiment.status}
        </span>
      </div>

      <div className="text-sm text-zinc-400">
        <p>
          <span className="text-zinc-500">Name:</span>{" "}
          {experiment.name}
        </p>
        <p>
          <span className="text-zinc-500">Started:</span>{" "}
          {experiment.startedAt}
        </p>
        {experiment.endedAt && (
          <p>
            <span className="text-zinc-500">Ended:</span>{" "}
            {experiment.endedAt}
          </p>
        )}
        {experiment.summary && (
          <>
            <p>
              <span className="text-zinc-500">
                Avg Latency:
              </span>{" "}
              {experiment.summary.avgLatency} ms
            </p>
            <p>
              <span className="text-zinc-500">
                Error Rate:
              </span>{" "}
              {experiment.summary.errorRate}%
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LastExperimentCard;
