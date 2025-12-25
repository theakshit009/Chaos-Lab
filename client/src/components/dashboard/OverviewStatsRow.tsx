import StatCard from "../../common/StatCard";
import type { MetricsSummary } from "../../types/metrics";

const OverviewStatsRow = ({
  summary,
}: {
  summary: MetricsSummary;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard
        label="Average Latency"
        value={`${summary.avgLatency} ms`}
      />
      <StatCard
        label="Error Rate"
        value={`${summary.errorRate}%`}
      />
      <StatCard
        label="Requests / Sec"
        value={summary.rps}
      />
      <StatCard
        label="CPU Usage"
        value={`${summary.cpuUsage}%`}
      />
    </div>
  );
};

export default OverviewStatsRow;
