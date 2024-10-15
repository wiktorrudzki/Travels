import { TripProvider } from "@/features/trip/hooks";
import { TripScreen } from "@/screens/trip";
import { TripRouteWithId } from "@/types/trip";
import { useRoute } from "@react-navigation/native";
import React from "react";

const Trip = () => {
  const { params } = useRoute<TripRouteWithId>();

  return (
    <TripProvider id={params.id}>
      <TripScreen />
    </TripProvider>
  );
};

export default Trip;
