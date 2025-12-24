interface ClientStatusCardProps {
  isRunning: boolean;
  lastRequestAt?: string;
  avgLatency?: number;
  requestsSent: number;
}

const ClientStatusCard = ({
  isRunning,
  lastRequestAt,
  avgLatency,
  requestsSent,
}: ClientStatusCardProps) => {
  return (
    <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl p-4 space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-zinc-200">
          Client Status
        </h3>

        <span
          className={`text-xs px-2 py-1 rounded-full ${
            isRunning
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-emerald-500/20 text-emerald-400"
          }`}
        >
          {isRunning ? "RUNNING" : "IDLE"}
        </span>
      </div>

      <div className="text-sm text-zinc-400">
        <p>
          <span className="text-zinc-500">Requests Sent:</span>{" "}
          {requestsSent}
        </p>

        <p>
          <span className="text-zinc-500">Avg Latency:</span>{" "}
          {avgLatency ? `${avgLatency} ms` : "--"}
        </p>

        <p>
          <span className="text-zinc-500">Last Request:</span>{" "}
          {lastRequestAt ?? "--"}
        </p>
      </div>
    </div>
  );
};

export default ClientStatusCard;
