import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { View } from "@/components/View";
import React from "react";
import { useTranslation } from "react-i18next";
import { useTripWithEvents } from "@/features/trip/hooks";
import { AddIcon, Pressable, useTheme } from "native-base";
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

  const { trip } = useTripWithEvents();

  const { push } = useSignedInNavigation();

  return (
    <AuthorizedLayout
      title={
        <TabBadge
          goBack={{
            to: { screen: "trips" },
            text: t("trips"),
          }}
          title={trip.title}
        />
      }
      withoutNavbar
    >
      <View style={styles.container}>
        <TripDaysList />
        <View style={styles.createEventWrapper}>
          <Text style={styles.title} text={t("events")} />
          {trip.canAdd && (
            <Pressable
              onPress={() => push("trip/create-event", { id: trip.id })}
            >
              <AddIcon size="2xl" color={colors.black} />
            </Pressable>
          )}
        </View>
        <View>
          <TripEventsList />
        </View>
      </View>
    </AuthorizedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FLEX_COLUMN,
    gap: SPACING.HUGE,
  },
  createEventWrapper: {
    ...CENTER_FLEX,
    justifyContent: "space-between",
  },
  title: SEMI_BOLD_TITLE,
});

export default TripScreen;
