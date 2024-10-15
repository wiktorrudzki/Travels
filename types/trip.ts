import { RouteProp } from "@react-navigation/native";

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
  runBefore: boolean;
};

export type TripRouteWithId = RouteProp<{
  trip: {
    id: string;
  };
}>;

export type TripContextType = {
  trip: Trip | undefined;
  isLoading: boolean;
  runBefore: boolean;
};
