/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "./httpClient";

export const saveExperiment = async (data: any) => {
  const res = await httpClient.post(
    "/api/experiments",
    data
  );
  return res.data;
};

export const getLatestExperiment = async () => {
  const res = await httpClient.get(
    "/api/experiments/latest"
  );
  return res.data;
};
