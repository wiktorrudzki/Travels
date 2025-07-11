import { getTrips } from "@/dal/trip";
import { usePromiseWithLoading } from "@/hooks";
import { TripsContextType, Trip } from "@/types/trip";
import React, { createContext, useContext, useEffect, useState } from "react";

const TripsContext = createContext<TripsContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

const TripsProvider = ({ children }: Props) => {
  const [trips, setTrips] = useState<Trip[]>([]);

  const [getAll, isLoading, runBefore] = usePromiseWithLoading(
    getTrips,
    (data) => {
      setTrips(data);
    }
  );

  useEffect(() => {
    getAll();
  }, []);

  const deleteTrip = (id: string) =>
    setTrips((prev) => prev.filter((trip) => trip.id !== id));

  const value: TripsContextType = {
    trips,
    isLoading,
    runBefore,
    deleteTrip,
  };

  return (
    <TripsContext.Provider value={value}>{children}</TripsContext.Provider>
  );
};

const useTrips = () => {
  const context = useContext(TripsContext);

  if (!context) {
    throw new Error("Cannot use useTrips without provider");
  }

  return context;
};

export { TripsProvider, useTrips };
