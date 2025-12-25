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
  res.json({
    status: "OK",
    service: "ChaosLab Backend",
  });
});

app.use("/auth", authRoutes);
app.use("/demo", demoRoutes);
app.use("/chaos", chaosRoutes);
app.use("/experiments", experimentRoutes);
app.use("/metrics", metricsRoutes);


app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
