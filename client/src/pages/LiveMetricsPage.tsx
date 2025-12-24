import { useMetrics } from "../hooks/useMetrics";
import KeyMetricsRow from "../components/metrics/KeyMetricsRow";
import LatencyChart from "../components/metrics/LatencyChart";
import ErrorRateChart from "../components/metrics/ErrorRateChart";
import RequestsPerSecondChart from "../components/metrics/RequestsPerSecondChart";
import RequestLogsPanel from "../components/metrics/RequestLogsPanel";

const LiveMetricsPage = () => {
  const {
    summary,
    latencySeries,
    errorSeries,
    rpsSeries,
    logs,
  } = useMetrics();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Live Metrics</h1>

      <KeyMetricsRow data={summary} />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <LatencyChart data={latencySeries} />
        <ErrorRateChart data={errorSeries} />
      </div>

      <RequestsPerSecondChart data={rpsSeries} />

      <RequestLogsPanel logs={logs} />
    </div>
  );
};

export default LiveMetricsPage;
