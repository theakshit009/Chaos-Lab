import express from "express";
import metrics from "../services/metrics.service.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    summary: metrics.snapshot(),
    logs: [],
  });
});

export default router;
