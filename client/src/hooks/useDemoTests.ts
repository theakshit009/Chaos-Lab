/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { runDemoRequest } from "../apis/demoApi";

export const useDemoTests = () => {
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);
  const [latencies, setLatencies] = useState<number[]>([]);
  const [lastRequestAt, setLastRequestAt] = useState<string>();

  const runTest = async (endpoint: string, count: number) => {
    setRunning(true);
    setLogs([]);
    setLatencies([]);

    for (let i = 0; i < count; i++) {
      const result = await runDemoRequest(endpoint);

      setLatencies((prev) => [...prev, result.latency]);
      setLastRequestAt(new Date().toLocaleTimeString());

      setLogs((prev) => [
        {
          time: new Date().toLocaleTimeString(),
          endpoint,
          ...result,
        },
        ...prev,
      ]);
    }

    setRunning(false);
  };

  const avgLatency =
    latencies.length > 0
      ? Math.round(
          latencies.reduce((a, b) => a + b, 0) /
            latencies.length
        )
      : undefined;

  return {
    runTest,
    running,
    logs,
    avgLatency,
    lastRequestAt,
    requestsSent: latencies.length,
  };
};
