import { Text } from "@/components/Text";
import { View } from "@/components/View";
import {
  CENTER_FLEX,
  FLEX_COLUMN,
  FULL_WIDTH,
  LITTLE_ROUNDED,
  LITTLE_SHADOW,
  SEMI_BOLD,
  SPACING,
} from "@/constants/styles";
import { areDatesSame, formatToDateTime, formatToTime } from "@/lib/date-fns";
import { Event as EventType } from "@/types/event";
import { Pressable, useTheme } from "native-base";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { useTripWithEvents } from "../hooks";
import { useSignedInNavigation } from "@/hooks";

type Props = {
  event: EventType;
};

const Event = ({ event }: Props) => {
  const { colors } = useTheme();

  const { currentDay } = useTripWithEvents();

  const { push } = useSignedInNavigation();

  const { i18n } = useTranslation();

  const start = useMemo(
    () =>
      areDatesSame(event.start, currentDay)
        ? formatToTime(event.start, i18n.language)
        : formatToDateTime(event.start),
    [event, currentDay]
  );

  const end = useMemo(
    () =>
      areDatesSame(event.end, currentDay)
        ? formatToTime(event.end, i18n.language)
        : formatToDateTime(event.end),
    [event, currentDay]
  );

  return (
    <Pressable onPress={() => push("trip/edit-event", { id: event.id })}>
      <View backgroundColor={colors.white} style={styles.container}>
        <View style={styles.topWrapper}>
          <Text style={styles.name} text={event.name} />
          <Text text={`${start} - ${end}`} />
        </View>
        <View style={styles.bottomWrapper}>
          <Text text="100PLN" />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FLEX_COLUMN,
    ...LITTLE_SHADOW,
    ...LITTLE_ROUNDED,
    padding: SPACING.MEDIUM,
    gap: SPACING.MEDIUM,
    justifyContent: "space-between",
    alignItems: "stretch",
    minHeight: 50,
  },
  topWrapper: {
    ...CENTER_FLEX,
    ...FULL_WIDTH,
    justifyContent: "space-between",
  },
  bottomWrapper: {
    ...CENTER_FLEX,
    ...FULL_WIDTH,
    justifyContent: "flex-end",
  },
  name: {
    fontWeight: SEMI_BOLD,
  },
});

export default Event;
