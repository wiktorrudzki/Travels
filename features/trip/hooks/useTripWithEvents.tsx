import { LoadingSpinner } from "@/components/Spinner";
import { getTripWithEvents } from "@/dal/trip";
import { usePromiseWithLoading, useSignedInNavigation } from "@/hooks";
import { formatToHttpDate } from "@/lib/date-fns";
import { TripWithEventsContextType, TripWithEvents } from "@/types/trip";
import React, { createContext, useContext, useEffect, useState } from "react";

const TripWithEventsContext = createContext<TripWithEventsContextType | null>(
  null
);

type Props = {
  children: React.ReactNode;
  id: string;
};

const TripWithEventsProvider = ({ children, id }: Props) => {
  const [trip, setTrip] = useState<TripWithEvents>();
  const [currentDay, setCurrentDay] = useState<Date>();

  const { replace } = useSignedInNavigation();

  const [get, isLoading, runBefore] = usePromiseWithLoading(
    getTripWithEvents,
    (data) => {
      setTrip(data);

      if (currentDay == undefined) {
        setCurrentDay(new Date(data.start));
      }
    }
  );

  useEffect(() => {
    get(id);
  }, [id]);

  if (isLoading || !runBefore) {
    return <LoadingSpinner />;
  }

  if (trip == undefined || currentDay == undefined) {
    replace("+not-found");
    return null;
  }

  const changeDay = (day: Date) => {
    setCurrentDay(day);
    get(id, formatToHttpDate(day));
  };

  const value: TripWithEventsContextType = {
    trip,
    currentDay,
    isLoading,
    runBefore,
    changeDay,
  };

  return (
    <TripWithEventsContext.Provider value={value}>
      {children}
    </TripWithEventsContext.Provider>
  );
};

const useTripWithEvents = () => {
  const context = useContext(TripWithEventsContext);

  if (!context) {
    throw new Error("Cannot use useTripWithEvents without provider");
  }

  return context;
};

export { TripWithEventsProvider, useTripWithEvents };
