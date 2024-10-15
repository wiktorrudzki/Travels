import { SearchInput } from "@/components/Input";
import { AuthorizedLayout } from "@/components/Layout";
import { View } from "@/components/View";
import { SPACING } from "@/constants/styles";
import { TripsSection } from "@/features/trips/components";
import React from "react";
import { StyleSheet } from "react-native";

const TripsScreen = () => {
  return (
    <AuthorizedLayout>
      <View style={styles.container}>
        <SearchInput />
        <TripsSection />
      </View>
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
