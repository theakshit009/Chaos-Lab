import { useDemoTests } from "../hooks/useDemoTests";
import RunTestCard from "../components/demo/RunTestCard";
import RequestResponseViewer from "../components/demo/RequestResponseViewer";
import ClientStatusCard from "../components/demo/ClientStatusCard";

const DemoAppPage = () => {
  const {
    runTest,
    running,
    logs,
    avgLatency,
    lastRequestAt,
    requestsSent,
  } = useDemoTests();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Demo App</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ClientStatusCard
          isRunning={running}
          avgLatency={avgLatency}
          lastRequestAt={lastRequestAt}
          requestsSent={requestsSent}
        />

        <RunTestCard
          onRun={(endpoint, count) =>
            runTest(endpoint, count)
          }
          running={running}
        />
      </div>

      <RequestResponseViewer logs={logs} />
    </div>
  );
};

export default DemoAppPage;
