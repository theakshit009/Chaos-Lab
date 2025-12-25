import type { Experiment } from "./experiments";

export type ExperimentsContextType = {
  experiments: Experiment[];
  lastExperiment: Experiment | null;
  loading: boolean;
  fetchLatest: () => Promise<void>;
};
