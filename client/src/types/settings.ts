export type AppSettings = {
  autoRefreshMetrics: boolean;
  metricsBufferSize: number;
};

export const DEFAULT_SETTINGS: AppSettings = {
  autoRefreshMetrics: true,
  metricsBufferSize: 30,
};
