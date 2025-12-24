import {
  Activity,
  AlertTriangle,
  Flame,
  Hash,
} from "lucide-react";

type StatCardProps = {
  label: string;
  value: string | number;
  subLabel?: string;
  status?: "success" | "warning" | "danger" | "neutral";
  icon?: "latency" | "error" | "requests" | "flame";
};

const iconMap = {
  latency: Activity,
  error: AlertTriangle,
  requests: Hash,
  flame: Flame,
};

const StatCard = ({
  label,
  value,
  subLabel,
  status = "neutral",
  icon,
}: StatCardProps) => {
  const statusStyles = {
    success: "text-emerald-400",
    warning: "text-yellow-400",
    danger: "text-red-400",
    neutral: "text-zinc-100",
  } as const;

  const Icon = icon ? iconMap[icon] : null;

  return (
    <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl p-4 space-y-1">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wide text-zinc-500">
          {label}
        </p>

        {Icon && (
          <Icon className="w-4 h-4 text-zinc-500" />
        )}
      </div>

      <p
        className={`text-2xl font-semibold ${
          statusStyles[status]
        }`}
      >
        {value}
      </p>

      {subLabel && (
        <p className="text-xs text-zinc-500">
          {subLabel}
        </p>
      )}
    </div>
  );
};

export default StatCard;
