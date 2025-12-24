 import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import type {
  MetricsSummary,
  TimeSeriesPoint,
  RequestLog,
} from "../types/metrics";

let socket: Socket | null = null;

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

  useEffect(() => {
    socket = io("http://localhost:4000", {
      transports: ["websocket"],
    });

    // 🔹 Summary cards
    socket.on("metrics:summary", (data: MetricsSummary) => {
      setSummary(data);
    });

    // 🔹 Latency graph
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    socket.on("metrics:latency", (point: any) => {
  setLatencySeries((prev) => [
    ...prev.slice(-30),
    {
      time: point.time,
      value: point.latency, // 🔥 FIX
    },
  ]);
});

    // 🔹 Error rate graph
    socket.on("metrics:errorRate", (point: TimeSeriesPoint) => {
      setErrorSeries((prev) => [...prev.slice(-30), point]);
    });

    // 🔹 Requests/sec graph
    socket.on("metrics:rps", (point: TimeSeriesPoint) => {
      setRpsSeries((prev) => [...prev.slice(-30), point]);
    });

    // 🔹 Request logs
    socket.on("metrics:log", (log: RequestLog) => {
      setLogs((prev) => [log, ...prev].slice(0, 15));
    });

    return () => {
      socket?.disconnect();
      socket = null;
    };
  }, []);

  return {
    summary,
    latencySeries,
    errorSeries,
    rpsSeries,
    logs,
  };
};
