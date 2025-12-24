import { useSettings } from "../hooks/useSettings";

const SettingsPage = () => {
  const { settings, updateSetting, resetSettings } =
    useSettings();

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-semibold">Settings</h1>

      {/* Auto Refresh */}
      <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium">
              Auto Refresh Metrics
            </h3>
            <p className="text-xs text-zinc-500">
              Automatically update live metrics in real-time
            </p>
          </div>

          <input
            type="checkbox"
            checked={settings.autoRefreshMetrics}
            onChange={(e) =>
              updateSetting(
                "autoRefreshMetrics",
                e.target.checked
              )
            }
          />
        </div>
      </div>

      {/* Metrics Buffer */}
      <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl p-4 space-y-2">
        <h3 className="text-sm font-medium">
          Metrics History Size
        </h3>
        <p className="text-xs text-zinc-500">
          Number of data points stored for charts
        </p>

        <input
          type="number"
          min={10}
          max={100}
          value={settings.metricsBufferSize}
          onChange={(e) =>
            updateSetting(
              "metricsBufferSize",
              Number(e.target.value)
            )
          }
          className="w-32 bg-black border border-zinc-700 px-2 py-1 rounded"
        />
      </div>

      {/* Reset */}
      <div className="flex justify-end">
        <button
          onClick={resetSettings}
          className="px-4 py-2 border border-zinc-700 rounded text-sm"
        >
          Reset Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
