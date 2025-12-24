import Experiment from "../models/Experiment.js";

export const saveLatestExperiment = async (
  userId,
  data
) => {
  await Experiment.findOneAndUpdate(
    { userId },
    data,
    { upsert: true }
  );
};

export const getLatestExperiment = async (
  userId
) => {
  return Experiment.findOne({ userId });
};
