import { View } from "@/components/View";
import React, { useMemo } from "react";
import TripCard from "./TripCard";
import MainTripCard from "./MainTripCard";
import { StyleSheet } from "react-native";
import { SPACING } from "@/constants/styles";
import { useTrips } from "../hooks";
import { Text } from "@/components/Text";
import { useTranslation } from "react-i18next";
import { Spinner } from "native-base";

const TripsSection = () => {
  const { trips, isLoading, runBefore } = useTrips();

  const { t } = useTranslation("trips");

  const mainTrip = useMemo(
    () => (trips.length > 0 ? trips[0] : undefined),
    [trips]
  );
  const restTrips = useMemo(
    () => (trips.length > 1 ? trips.slice(1) : []),
    [trips]
  );

  if (isLoading || !runBefore) {
    return (
      <View>
        <Spinner size="lg" />
      </View>
    );
  }

  if (mainTrip == undefined) {
    return (
      <View>
        <Text text={t("no_trips_planned")} />
      </View>
    );
  }

  return (
    <View style={styles.content}>
      <MainTripCard trip={mainTrip} />
      {restTrips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    gap: SPACING.MEDIUM,
  },
});

export default TripsSection;
