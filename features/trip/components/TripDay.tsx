import { Text } from "@/components/Text";
import { View } from "@/components/View";
import {
  BOLD,
  FLEX_COLUMN,
  FULL_WIDTH,
  LITTLE_ROUNDED,
  LITTLE_SHADOW,
  SPACING,
} from "@/constants/styles";
import { formatToDayName, getDayOfTheMonth } from "@/lib/date-fns";
import { useTheme } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {
  day: Date;
};

const TripDay = ({ day }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container} backgroundColor={colors.white}>
      <Text style={styles.dayText} text={formatToDayName(day)} />
      <View style={styles.line} backgroundColor={colors.muted[300]} />
      <Text style={styles.dateText} text={getDayOfTheMonth(day).toString()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FLEX_COLUMN,
    ...LITTLE_SHADOW,
    ...LITTLE_ROUNDED,
    padding: SPACING.MEDIUM,
    gap: SPACING.SMALL,
  },
  dayText: {
    textTransform: "capitalize",
    fontSize: SPACING.MEDIUM,
  },
  line: {
    ...FULL_WIDTH,
    height: 1,
  },
  dateText: {
    fontSize: SPACING.GIGANTIC,
    lineHeight: SPACING.GIGANTIC,
    fontWeight: BOLD,
  },
});

export default TripDay;
