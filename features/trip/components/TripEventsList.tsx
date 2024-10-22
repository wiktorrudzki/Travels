import React from "react";
import { useTripWithEvents } from "../hooks";
import Event from "./Event";
import { ScrollView } from "native-base";
import { FLEX_COLUMN, SPACING } from "@/constants/styles";
import { StyleSheet } from "react-native";

const TripEventsList = () => {
  const { trip } = useTripWithEvents();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {trip.events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FLEX_COLUMN,
    gap: SPACING.LARGE,
    paddingBottom: 660,
  },
});

export default TripEventsList;
