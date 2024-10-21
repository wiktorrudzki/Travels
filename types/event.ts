export type Event = {
  id: string;
  name: string;
  description: string | null;
  start: string;
  end: string;
  tripId: string;
};

export type CreateEventForm = {
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
