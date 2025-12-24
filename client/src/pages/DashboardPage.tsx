import OverviewStatsRow from "../components/dashboard/OverviewStatsRow";
import ActiveChaosCard from "../components/dashboard/ActiveChaosCard";
import LastExperimentCard from "../components/dashboard/LastExperiment";
import { useExperimentsContext } from "../hooks/useExperimentsContext";

const DashboardPage = () => {
  const { experiment } = useExperimentsContext();

  const lastExperiment = experiment;


  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">
        Dashboard{" "}
        <span className="text-zinc-500 text-base">
          (Overview)
        </span>
      </h1>

      <OverviewStatsRow />

      <ActiveChaosCard />

      <section className="mt-4">
        <LastExperimentCard experiment={lastExperiment} />
      </section>
    </div>
  );
};

export default DashboardPage;
