export type Trip = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  events: [];
  participants: [];
};

export type TripsContextType = {
  trips: Trip[];
  isLoading: boolean;
};
