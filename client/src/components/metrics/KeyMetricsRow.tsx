import type { MetricsSummary } from "../../types/metrics";

const KeyMetricsRow = ({ data }: { data: MetricsSummary }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Metric label="Latency" value={`${data.avgLatency} ms`} />
      <Metric label="Error Rate" value={`${data.errorRate}%`} />
      <Metric label="Requests/sec" value={data.rps} />
      <Metric label="CPU" value={`${data.cpuUsage ?? 0}%`} />
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Metric = ({ label, value }: any) => (
  <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl p-4">
    <p className="text-xs text-zinc-500">{label}</p>
    <p className="text-2xl font-semibold text-zinc-100">{value}</p>
  </div>
);

export default KeyMetricsRow;
