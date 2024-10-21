import { Trip } from "./trip";

export type Event = {
  id: string;
  name: string;
  description: string | null;
  start: string;
  end: string;
  tripId: string;
};

export type EventWithTrip = {
  id: string;
  name: string;
  description: string | null;
  start: string;
  end: string;
  trip: Trip;
  canEdit: boolean;
};

export type EventForm = {
  name: string;
  description?: string;
  tripId: string;
  start: string;
  end: string;
};

export type CreateEventRequest = {
  name: string;
  description?: string;
  tripId: string;
  start: Date;
  end: Date;
};

export type EditEventRequest = {
  id: string;
  name: string;
  description?: string;
  tripId: string;
  start: Date;
  end: Date;
};

export type EventContextType = {
  event: EventWithTrip;
  isLoading: boolean;
  runBefore: boolean;
};
