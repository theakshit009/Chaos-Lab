import express from "express";
import chaosMiddleware from "../middleware/chaos.middleware.js";

const router = express.Router();

// Fast endpoint
router.get("/fast", chaosMiddleware, (req, res) => {
  res.json({ ok: true, type: "fast" });
});

// Slow endpoint
router.get("/slow", chaosMiddleware, async (req, res) => {
  await new Promise((r) => setTimeout(r, 300));
  res.json({ ok: true, type: "slow" });
});

// Unstable endpoint
router.get("/unstable", chaosMiddleware, (req, res) => {
  res.json({ ok: true, type: "unstable" });
});

export default router;