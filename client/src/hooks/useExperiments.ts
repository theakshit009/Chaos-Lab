import { useState } from "react";
import type { Experiment } from "../types/experiments";
import type { ChaosConfig } from "../types/chaos";

type ExperimentSummary = {
  avgLatency: number;
  errorRate: number;
};

export const useExperiment = () => {
  const [experiment, setExperiment] =
    useState<Experiment | null>(null);

  // 🔹 Start a new experiment (overwrite previous)
  const startExperiment = (
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    chaosConfig: ChaosConfig
  ) => {
    setExperiment({
      id: crypto.randomUUID(),
      name,
      status: "RUNNING",
      startedAt: new Date().toLocaleTimeString(),
    });
  };

  // 🔹 Complete current experiment
  const completeExperiment = (
    summary: ExperimentSummary
  ) => {
    setExperiment((prev) => {
      if (!prev) return null;

      return {
        ...prev,
        status:
          summary.errorRate > 20
            ? "FAILED"
            : "SUCCESS",
        endedAt: new Date().toLocaleTimeString(),
        summary,
      };
    });
  };

  // 🔹 Reset (optional)
  const resetExperiment = () => {
    setExperiment(null);
  };

  return {
    experiment,        // Dashboard reads this
    startExperiment,   // Demo App triggers this
    completeExperiment,
    resetExperiment,
  };
};
