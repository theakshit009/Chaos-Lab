import { createContext } from "react";
import type { ReactNode } from "react";
import { useExperiments } from "../hooks/useExperiments";
import type { ExperimentsContextType } from "../types/experimentContext";

// eslint-disable-next-line react-refresh/only-export-components
export const ExperimentsContext =
  createContext<ExperimentsContextType | null>(null);

export const ExperimentsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const value = useExperiments();

  return (
    <ExperimentsContext.Provider value={value}>
      {children}
    </ExperimentsContext.Provider>
  );
};
