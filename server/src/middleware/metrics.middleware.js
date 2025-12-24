import metrics from "../services/metrics.services.js";

export default function metricsMiddleware(
  req,
  res,
  next
) {
  const start = Date.now();

  res.on("finish", () => {
    metrics.record({
      status: res.statusCode,
      latency: Date.now() - start,
      endpoint: req.path,
    });
  });

  next();
}
