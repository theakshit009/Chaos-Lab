import { chaosConfig } from "../services/chaos.config.js";

export default async function chaosMiddleware(
  req,
  res,
  next
) {
  const { latencyMs, apiCrashRate } =
    chaosConfig.current;

  // Simulate API crash
  if (Math.random() * 100 < apiCrashRate) {
    return res
      .status(500)
      .json({ error: "Chaos induced failure" });
  }

  // Simulate latency
  if (latencyMs > 0) {
    await new Promise((r) =>
      setTimeout(r, latencyMs)
    );
  }

  next();
}
