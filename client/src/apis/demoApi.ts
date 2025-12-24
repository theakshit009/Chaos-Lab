/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "./httpClient";

export const runDemoRequest = async (endpoint: string) => {
  const start = performance.now();
  try {
    const res = await httpClient.get(endpoint);
    const latency = Math.round(performance.now() - start);

    return {
      status: res.status,
      latency,
      body: res.data,
    };
  } catch (err: any) {
    const latency = Math.round(performance.now() - start);

    return {
      status: err.status || "TIMEOUT",
      latency,
      error: err.message || "Request failed",
    };
  }
};
