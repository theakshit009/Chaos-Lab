import express from "express";
import {
  saveLatestExperiment,
  getLatestExperiment,
} from "../services/experiment.services.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();


router.post("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const experimentData = req.body;

    await saveLatestExperiment(userId, {
      ...experimentData,
      userId,
    });

    res.status(200).json({
      message: "Latest experiment saved",
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to save experiment",
    });
  }
});


router.get("/latest", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const experiment = await getLatestExperiment(userId);

    res.json(experiment);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch experiment",
    });
  }
});

export default router;
