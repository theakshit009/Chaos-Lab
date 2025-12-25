import { useEffect, useState } from "react";
import { getLatestExperiment } from "../apis/experimentsApi";
import type { Experiment } from "../types/experiments";

export const useExperiments = () => {
  const [experiments, setExperiments] = useState<Experiment[]>([]);
  const [lastExperiment, setLastExperiment] =
    useState<Experiment | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchLatest = async () => {
    try {
      setLoading(true);
      const data = await getLatestExperiment();

      if (data) {
        setLastExperiment(data);
        setExperiments([data]); // future-proof
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setLastExperiment(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatest();
  }, []);

  return {
    experiments,
    lastExperiment,
    loading,
    fetchLatest,
  };
};
