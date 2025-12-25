import httpClient from "./httpClient";

export const getChaosConfig = async () => {
  const res = await httpClient.get("/api/chaos");
  return res.data;
};

export const updateChaosConfig = async (
  payload: {
    latencyMs?: number;
    apiCrashRate?: number;
  }
) => {
  const res = await httpClient.post(
    "/api/chaos",
    payload
  );
  return res.data;
};
