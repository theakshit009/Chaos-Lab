import httpClient from "./httpClient";
import type { ChaosConfig } from "../types/chaos";

export const getChaosConfig = () =>
  httpClient.get<ChaosConfig>("/api/chaos/config").then((r) => r.data);

export const updateChaosConfig = (config: ChaosConfig) =>
  httpClient.post("/api/chaos/config", config).then((r) => r.data);
