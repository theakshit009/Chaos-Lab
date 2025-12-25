import { useMetrics } from "../hooks/useMetrics";
import OverviewStatsRow from "../components/dashboard/OverviewStatsRow";
import ActiveChaosCard from "../components/dashboard/ActiveChaosCard";
import LastExperimentCard from "../components/dashboard/LastExperiment";

const DashboardPage = () => {
  const { summary } = useMetrics();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">
        Dashboard <span className="text-zinc-500 text-base">(Overview)</span>
      </h1>

      <OverviewStatsRow summary={summary} />

      <ActiveChaosCard />

      <LastExperimentCard />
    </div>
  );
};

export default DashboardPage;