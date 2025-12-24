let total = 0;
let errors = 0;
let latencies = [];

const record = ({ status, latency }) => {
  total++;
  if (status >= 500) errors++;

  latencies.push(latency);
  if (latencies.length > 50) latencies.shift();
};

const snapshot = () => {
  const avgLatency =
    latencies.reduce((a, b) => a + b, 0) /
      (latencies.length || 1);

  return {
    avgLatency: Math.round(avgLatency),
    errorRate:
      total === 0
        ? 0
        : Math.round((errors / total) * 100),
    totalRequests: total,
  };
};

export default { record, snapshot };
