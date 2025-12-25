import express from "express";
import cors from "cors";

import demoRoutes from "./routes/demo.routes.js";
import chaosRoutes from "./routes/chaos.routes.js";
import experimentRoutes from "./routes/experiment.routes.js";
import authRoutes from "./routes/auth.routes.js";
import metricsMiddleware from "./middleware/metrics.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(metricsMiddleware);

app.get("/health", (req, res) => {
  res.json({ status: "OK", service: "ChaosLab Backend" });
});

app.use("/api/demo", demoRoutes);
app.use("/api/chaos", chaosRoutes);
app.use("/api/experiments", experimentRoutes);
app.use("/api/auth", authRoutes);

export default app;
