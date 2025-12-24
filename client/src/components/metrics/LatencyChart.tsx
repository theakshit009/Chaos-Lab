import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { TimeSeriesPoint } from "../../types/metrics";

const LatencyChart = ({ data }: { data: TimeSeriesPoint[] }) => {
  return (
    <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl p-4">
      <h3 className="text-sm font-medium text-zinc-200 mb-3">
        Latency Over Time (ms)
      </h3>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"   // ✅ MUST be "value"
            stroke="#22d3ee"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LatencyChart;
