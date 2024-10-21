import { RouteProp } from "@react-navigation/native";
import { User } from "./user";
import { Event } from "./event";

export type TripWithEvents = {
  id: string;
  title: string;
  start: string;
  end: string;
  events: Event[];
  owner: User;
  participants: [];
};

export type Trip = {
  id: string;
  title: string;
  start: string;
  end: string;
  ownerId: string;
  canAdd?: boolean;
};

export type TripsContextType = {
  trips: Trip[];
  isLoading: boolean;
  runBefore: boolean;
};

export type TripRouteWithId = RouteProp<{
  trip: {
    id: string;
  };
}>;

export type CreateEventRoute = RouteProp<{
  "trip/add-event": {
    id: string;
  };
}>;

export type EditEventRoute = RouteProp<{
  "trip/add-event": {
    id: string;
  };
}>;

export type TripWithEventsContextType = {
  trip: TripWithEvents;
  currentDay: Date;
  isLoading: boolean;
  runBefore: boolean;
  canCreateEvents?: boolean;
  changeDay: (day: Date) => void;
};

export type TripContextType = {
  trip: Trip;
  isLoading: boolean;
  runBefore: boolean;
  canCreateEvents?: boolean;
};

export type TripDayContextType = {
  day: Date;
  setDay: (day: Date) => void;
};
