import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { View } from "@/components/View";
import React from "react";
import { useTranslation } from "react-i18next";
import { useTrip } from "@/features/trip/hooks";
import { AddIcon, Spinner, useTheme } from "native-base";
import { TripDaysList, TripEventsList } from "@/features/trip/components";
import { Text } from "@/components/Text";
import { StyleSheet } from "react-native";
import {
  CENTER_FLEX,
  FLEX_COLUMN,
  SEMI_BOLD_TITLE,
  SPACING,
} from "@/constants/styles";
import { useSignedInNavigation } from "@/hooks";

const TripScreen = () => {
  const { t } = useTranslation("trips");

  const { colors } = useTheme();

  const { trip, isLoading, runBefore } = useTrip();

  const { replace } = useSignedInNavigation();

  if (isLoading || !runBefore) {
    return <Spinner size="lg" />;
  }

  if (trip == undefined) {
    replace("+not-found");
    return null;
  }

  return (
    <AuthorizedLayout
      title={
        <TabBadge
          goBack={{
            to: "trips",
            text: t("trips"),
          }}
          title={trip.title}
        />
      }
    >
      <View style={styles.container}>
        <TripDaysList />
        <View style={styles.addEventWrapper}>
          <Text style={styles.title} text={t("events")} />
          <AddIcon size="2xl" color={colors.black} />
        </View>
        <TripEventsList />
      </View>
    </AuthorizedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FLEX_COLUMN,
    gap: SPACING.MEDIUM,
  },
  addEventWrapper: {
    ...CENTER_FLEX,
    justifyContent: "space-between",
  },
  title: SEMI_BOLD_TITLE,
});

export default TripScreen;
