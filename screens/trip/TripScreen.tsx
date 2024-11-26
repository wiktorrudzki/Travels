import { AuthorizedLayout } from "@/components/Layout";
import { View } from "@/components/View";
import React from "react";
import { useTranslation } from "react-i18next";
import { useTripWithEvents } from "@/features/trip/hooks";
import { AddIcon, Pressable, useTheme } from "native-base";
import {
  TripDaysList,
  TripEventsList,
  TripSettingsButton,
} from "@/features/trip/components";
import { Text } from "@/components/Text";
import { StyleSheet } from "react-native";
import {
  CENTER_FLEX,
  FLEX_COLUMN,
  ROUNDED,
  SEMI_BOLD_TITLE,
  SPACING,
} from "@/constants/styles";
import { useSignedInNavigation } from "@/hooks";
import { TabBadge } from "@/components/TabBadge";
import { FontAwesome } from "@expo/vector-icons";

const TripScreen = () => {
  const { t } = useTranslation("trips");

  const { colors } = useTheme();

  const { trip } = useTripWithEvents();

  const { push } = useSignedInNavigation();

  return (
    <AuthorizedLayout
      title={
        <>
          <TabBadge
            goBack={{
              to: { screen: "trips" },
              text: t("trips"),
            }}
            title={trip.title}
          />
          {trip.isOwner && (
            <>
              <Pressable
                onPress={() => push("chat", { id: trip.id })}
                style={styles.iconButton}
                borderColor={colors.primary[400]}
                backgroundColor={colors.white}
              >
                <FontAwesome
                  color={colors.primary[400]}
                  name="wechat"
                  size={32}
                />
              </Pressable>
              <TripSettingsButton />
            </>
          )}
        </>
      }
      withoutNavbar
    >
      <View style={styles.container}>
        <TripDaysList />
        <View style={styles.createEventWrapper}>
          <Text style={styles.title} text={t("events")} />
          {trip.isOwner && (
            <Pressable
              onPress={() => push("trip/create-event", { id: trip.id })}
            >
              <AddIcon size="2xl" color={colors.black} />
            </Pressable>
          )}
        </View>
        <TripEventsList />
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
  iconButton: {
    ...ROUNDED,
    padding: SPACING.MEDIUM,
    zIndex: 100,
    borderWidth: 1,
    position: "absolute",
    bottom: 50,
    right: 50,
  },
});

export default TripScreen;
