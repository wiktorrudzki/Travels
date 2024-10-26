import {
  TripWithEventsProvider,
  UserFriendsProvider,
} from "@/features/trip/hooks";
import { EditTripScreen } from "@/screens/trip";
import { EditTripRoute } from "@/types/trip";
import { useRoute } from "@react-navigation/native";
import React from "react";

const EditTrip = () => {
  const { params } = useRoute<EditTripRoute>();

  return (
    <TripWithEventsProvider id={params.id}>
      <UserFriendsProvider>
        <EditTripScreen />
      </UserFriendsProvider>
    </TripWithEventsProvider>
  );
};

export default EditTrip;
