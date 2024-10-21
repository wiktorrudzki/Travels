import { TripProvider } from "@/features/trip/hooks";
import { CreateEventScreen } from "@/screens/trip";
import { CreateEventRouteWithTripId } from "@/types/trip";
import { useRoute } from "@react-navigation/native";
import React from "react";

const CreateEvent = () => {
  const { params } = useRoute<CreateEventRouteWithTripId>();

  return (
    <TripProvider id={params.id}>
      <CreateEventScreen />
    </TripProvider>
  );
};

export default CreateEvent;
