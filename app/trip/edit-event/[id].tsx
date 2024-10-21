import { EventProvider, TripProvider } from "@/features/trip/hooks";
import { EditEventScreen } from "@/screens/trip";
import { EditEventRoute } from "@/types/trip";
import { useRoute } from "@react-navigation/native";
import React from "react";

const EditEvent = () => {
  const { params } = useRoute<EditEventRoute>();

  return (
    <EventProvider id={params.id}>
      <EditEventScreen />
    </EventProvider>
  );
};

export default EditEvent;
