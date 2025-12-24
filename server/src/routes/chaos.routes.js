import express from "express";
import { chaosConfig } from "../services/chaos.config.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(chaosConfig.current);
});

router.post("/", (req, res) => {
  chaosConfig.current = {
    ...chaosConfig.current,
    ...req.body,
  };

  res.json({
    message: "Chaos config updated",
    config: chaosConfig.current,
  });
});

export default router;
