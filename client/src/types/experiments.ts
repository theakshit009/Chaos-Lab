export type ExperimentStatus =
  | "RUNNING"
  | "SUCCESS"
  | "FAILED";

export type ExperimentSummary = {
  avgLatency: number;
  errorRate: number;
};

export type Experiment = {
  id: string;
  name: string;
  status: ExperimentStatus;
  startedAt: string;
  endedAt?: string;
  summary?: ExperimentSummary;
};
