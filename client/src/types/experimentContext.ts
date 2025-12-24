import type { Experiment } from "./experiments";
import type { ChaosConfig } from "./chaos";

export type ExperimentsContextType = {
  experiment: Experiment | null;

  startExperiment: (
    name: string,
    chaosConfig: ChaosConfig
  ) => void;

  completeExperiment: (
    summary: {
      avgLatency: number;
      errorRate: number;
    }
  ) => void;

  resetExperiment: () => void;
};
