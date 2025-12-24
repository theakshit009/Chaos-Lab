import StatCard from '../../common/StatCard';

const OverviewStatsRow = () => {
  // later get from API / socket
  const data = {
    avgLatency: 55,
    errorRate: 0.01,
    totalRequests: 12456,
    activeExperiments: 3,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard
        label="Average Latency"
        value={`${data.avgLatency} ms`}
        icon="latency"
      />
      <StatCard
        label="Error Rate"
        value={`${data.errorRate}%`}
        icon="error"
      />
      <StatCard
        label="Total Requests"
        value={data.totalRequests.toLocaleString()}
        icon="requests"
      />
      <StatCard
        label="Active Experiments"
        value={data.activeExperiments}
        icon="flame"
      />
    </div>
  );
};

export default OverviewStatsRow;
