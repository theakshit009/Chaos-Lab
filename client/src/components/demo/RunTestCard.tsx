const RunTestCard = ({
  onRun,
  running,
}: {
  onRun: (endpoint: string, count: number) => void;
  running: boolean;
}) => {
  return (
    <div className="bg-[#0b0b16] border border-zinc-800 rounded-xl p-4 space-y-3">
      <input
        placeholder="/api/users"
        className="w-full bg-black border border-zinc-700 px-3 py-2 rounded"
        id="endpoint"
      />

      <input
        type="number"
        placeholder="Number of requests"
        className="w-full bg-black border border-zinc-700 px-3 py-2 rounded"
        id="count"
      />

      <button
        disabled={running}
        onClick={() => {
          const endpoint = (
            document.getElementById("endpoint") as HTMLInputElement
          ).value;
          const count = Number(
            (document.getElementById("count") as HTMLInputElement).value
          );

          onRun(endpoint, count);
        }}
        className="w-full bg-cyan-500 text-black py-2 rounded"
      >
        {running ? "Running..." : "Start Test"}
      </button>
    </div>
  );
};

export default RunTestCard;
