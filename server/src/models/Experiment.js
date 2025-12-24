import mongoose from "mongoose";

const ExperimentSchema = new mongoose.Schema({
  userId: String,
  name: String,
  status: String,
  summary: Object,
  startedAt: Date,
  endedAt: Date,
});

export default mongoose.model(
  "Experiment",
  ExperimentSchema
);
