import type { RequestLog } from "../../types/metrics";

const RequestLogsPanel = ({ logs }: { logs: RequestLog[] }) => {
  return (
    <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl">
      <div className="px-4 py-2 text-xs uppercase text-zinc-500 border-b border-zinc-800">
        Recent Request Logs
      </div>

      {logs.map((log, i) => (
        <div
          key={i}
          className="grid grid-cols-5 px-4 py-2 text-sm border-b border-zinc-800"
        >
          <div>{log.time}</div>
          <div>{log.endpoint}</div>
          <div className={log.status === 200 ? "text-green-400" : "text-red-400"}>
            {log.status}
          </div>
          <div>{log.latency}ms</div>
          <div>{log.reason}</div>
        </div>
      ))}
    </div>
  );
};

export default RequestLogsPanel;
