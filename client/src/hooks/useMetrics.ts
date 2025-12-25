import { useEffect, useState } from "react";
import httpClient from "../apis/httpClient";
import type {
  MetricsSummary,
  TimeSeriesPoint,
  RequestLog,
} from "../types/metrics";

export const useMetrics = () => {
  const [summary, setSummary] = useState<MetricsSummary>({
    avgLatency: 0,
    errorRate: 0,
    rps: 0,
    cpuUsage: 0,
  });

  const [latencySeries, setLatencySeries] = useState<TimeSeriesPoint[]>([]);
  const [errorSeries, setErrorSeries] = useState<TimeSeriesPoint[]>([]);
  const [rpsSeries, setRpsSeries] = useState<TimeSeriesPoint[]>([]);
  const [logs, setLogs] = useState<RequestLog[]>([]);

  const fetchMetrics = async () => {
    try {
      const res = await httpClient.get("/api/metrics");

      const now = new Date().toISOString(); // ✅ STRING timestamp

      const { summary: s, logs: l } = res.data;

      setSummary(s);

      setLatencySeries((prev) => [
        ...prev.slice(-30),
        {
          time: now,
          value: s.avgLatency,
        },
      ]);

      setErrorSeries((prev) => [
        ...prev.slice(-30),
        {
          time: now,
          value: s.errorRate,
        },
      ]);

      setRpsSeries((prev) => [
        ...prev.slice(-30),
        {
          time: now,
          value: s.rps,
        },
      ]);

      setLogs(l ?? []);
    } catch (err) {
      console.error("Failed to fetch metrics", err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  return {
    summary,
    latencySeries,
    errorSeries,
    rpsSeries,
    logs,
  };
};
