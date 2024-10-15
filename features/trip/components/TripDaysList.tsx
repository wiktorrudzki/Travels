import React, { useMemo } from "react";
import { useTrip } from "../hooks";
import { ScrollView, useTheme } from "native-base";
import { getDaysArray } from "@/lib/date-fns";
import TripDay from "./TripDay";
import { StyleSheet } from "react-native";
import { CENTER_FLEX, SPACING } from "@/constants/styles";

const TripDaysList = () => {
  const { trip } = useTrip();

  const { colors } = useTheme();

  if (!trip) {
    return null;
  }

  const tripDays = useMemo(
    () => getDaysArray(new Date(trip.start), new Date(trip.end)),
    [trip]
  );

  return (
    <ScrollView
      backgroundColor={colors.white}
      contentContainerStyle={styles.container}
      horizontal={true}
    >
      {tripDays.map((day) => (
        <TripDay key={day.toString()} day={day} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CENTER_FLEX,
    gap: SPACING.SMALL,
    padding: SPACING.MEDIUM,
  },
});

export default TripDaysList;
