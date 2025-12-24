import httpClient from "./httpClient";
import type { MetricsSummary } from "../types/metrics";

export const fetchInitialMetrics = async (): Promise<MetricsSummary> => {
  const res = await httpClient.get("/metrics/summary");
  return res.data;
};