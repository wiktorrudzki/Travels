import { LoadingSpinner } from "@/components/Spinner";
import { getEvent } from "@/dal/event";
import { usePromiseWithLoading, useSignedInNavigation } from "@/hooks";
import { EventWithTrip } from "@/types/event";
import { EventContextType } from "@/types/event";
import { createContext, useContext, useEffect, useState } from "react";

const EventContext = createContext<EventContextType | null>(null);

type Props = {
  children: React.ReactNode;
  id: string;
};

const EventProvider = ({ children, id }: Props) => {
  const [event, setEvent] = useState<EventWithTrip>();

  const { replace } = useSignedInNavigation();

  const [get, isLoading, runBefore] = usePromiseWithLoading(
    getEvent,
    (data) => {
      setEvent(data);
    }
  );

  useEffect(() => {
    get(id);
  }, []);

  if (isLoading || !runBefore) {
    return <LoadingSpinner />;
  }

  if (event == undefined) {
    replace("+not-found");
    return null;
  }

  const value: EventContextType = {
    event,
    isLoading,
    runBefore,
  };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};

const useEvent = () => {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error("Cannot use useEvent without provider");
  }

  return context;
};

export { EventProvider, useEvent };
