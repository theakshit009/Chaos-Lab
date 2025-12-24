export type ChaosConfig = {
  latencyMs: number;
  apiCrashRate: number;   // %
  dbDelayMs: number;
  packetDrop: number;    // %
  cpuSpike: boolean;
  cpuSpikeDurationMs: number;
};

export const DEFAULT_CHAOS_CONFIG: ChaosConfig = {
  latencyMs: 0,
  apiCrashRate: 0,
  dbDelayMs: 0,
  packetDrop: 0,
  cpuSpike: false,
  cpuSpikeDurationMs: 0,
};
