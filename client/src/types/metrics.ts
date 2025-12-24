export type MetricsSummary = {
  avgLatency: number;
  errorRate: number;
  rps: number;
  cpuUsage?: number;
};

export type TimeSeriesPoint = {
  time: string;
  value: number;
};


export type RequestLog = {
  time: string;
  endpoint: string;
  status: number | "TIMEOUT";
  latency: number;
  reason: string;
};
