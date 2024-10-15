import { getTrip } from "@/dal/trip";
import { usePromiseWithLoading } from "@/hooks";
import { Trip, TripContextType } from "@/types/trip";
import { createContext, useContext, useEffect, useState } from "react";

const TripContext = createContext<TripContextType | null>(null);

type Props = {
  children: React.ReactNode;
  id: string;
};

const TripProvider = ({ children, id }: Props) => {
  const [trip, setTrip] = useState<Trip>();

  const [getAll, isLoading, runBefore] = usePromiseWithLoading(
    getTrip,
    (data) => {
      setTrip(data);
    }
  );

  useEffect(() => {
    getAll(id);
  }, []);

  const value: TripContextType = {
    trip,
    isLoading,
    runBefore,
  };

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
};

const useTrip = () => {
  const context = useContext(TripContext);

  if (!context) {
    throw new Error("Cannot use useTrip without provider");
  }

  return context;
};

export { TripProvider, useTrip };
