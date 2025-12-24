import { useContext } from "react";
import { ExperimentsContext } from "../context/ExperimentProvider";

export const useExperimentsContext = () => {
  const context = useContext(ExperimentsContext);

  if (!context) {
    throw new Error(
      "useExperimentsContext must be used inside ExperimentsProvider"
    );
  }

  return context;
};
