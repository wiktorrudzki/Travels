import { TripWithEventsProvider } from "@/features/trip/hooks";
import { TripScreen } from "@/screens/trip";
import { TripRouteWithId } from "@/types/trip";
import { useRoute } from "@react-navigation/native";
import React from "react";

const Trip = () => {
  const { params } = useRoute<TripRouteWithId>();

  return (
    <TripWithEventsProvider id={params.id}>
      <TripScreen />
    </TripWithEventsProvider>
  );
};

export default Trip;
