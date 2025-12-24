import { useEffect, useState } from "react";
import type { ChaosConfig } from "../types/chaos";
import { getChaosConfig, updateChaosConfig } from "../apis/chaosApi";

export const useChaosConfig = () => {
  const [config, setConfig] = useState<ChaosConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getChaosConfig()
      .then(setConfig)
      .finally(() => setLoading(false));
  }, []);

  const saveConfig = async (next: ChaosConfig) => {
    setConfig(next);
    await updateChaosConfig(next);
  };

  return { config, loading, saveConfig };
};
