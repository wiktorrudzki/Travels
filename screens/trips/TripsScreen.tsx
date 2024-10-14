import { SearchInput } from "@/components/Input";
import { AuthorizedLayout } from "@/components/Layout";
import { View } from "@/components/View";
import { SPACING } from "@/constants/styles";
import {
  MainTripCard,
  TripCard,
  TripsSection,
} from "@/features/trips/components";
import { TripsProvider } from "@/features/trips/hooks";
import React from "react";
import { StyleSheet } from "react-native";

const TripsScreen = () => {
  return (
    <AuthorizedLayout>
      <TripsProvider>
        <View style={styles.container}>
          <SearchInput />
          <TripsSection />
        </View>
      </TripsProvider>
    </AuthorizedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    gap: SPACING.HUGE,
  },
});

export default TripsScreen;
