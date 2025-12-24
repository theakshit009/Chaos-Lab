import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { TimeSeriesPoint } from "../../types/metrics";

interface ErrorRateChartProps {
  data: TimeSeriesPoint[]; // value = error rate %
}

const ErrorRateChart = ({ data }: ErrorRateChartProps) => {
  return (
    <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl p-4">
      <h3 className="text-sm font-medium text-zinc-200 mb-3">
        Error Rate Over Time (%)
      </h3>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data}>
          <XAxis
            dataKey="time"
            stroke="#71717a"
            tick={{ fontSize: 12 }}
          />
          <YAxis
            stroke="#71717a"
            tick={{ fontSize: 12 }}
            domain={[0, 100]}
            allowDecimals={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0b0b16",
              border: "1px solid #27272a",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            labelStyle={{ color: "#a1a1aa" }}
            formatter={(value: number) => [`${value}%`, "Error Rate"]}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ef4444"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ErrorRateChart;
