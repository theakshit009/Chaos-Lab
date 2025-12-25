import httpClient from "./httpClient";

type DemoType = "fast" | "slow" | "unstable";

const DEMO_MAP: Record<string, DemoType> = {
  fast: "fast",
  slow: "slow",
  unstable: "unstable",

  // UI labels mapping (safe)
  "fast test": "fast",
  "slow test": "slow",
  "unstable test": "unstable",
  latency: "slow",
  error: "unstable",
};

export const runDemoRequest = async (type: string) => {
  const key = type.toLowerCase().trim();

  const mappedType = DEMO_MAP[key];

  if (!mappedType) {
    console.error("Invalid demo type from UI:", type);
    throw new Error(`Invalid demo request type: ${type}`);
  }

  return httpClient.get(`/api/demo/${mappedType}`);
};
