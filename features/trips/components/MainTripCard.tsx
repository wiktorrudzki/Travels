import { Text } from "@/components/Text";
import { View } from "@/components/View";
import {
  FLEX_COLUMN,
  FULL_SPACE,
  FULL_WIDTH_IMAGE,
  LITTLE_ROUNDED,
  LITTLE_ROUNDED_IMAGE,
  MAIN_CARD_TITLE,
  SHADOW,
  SPACING,
} from "@/constants/styles";
import { useSignedInNavigation } from "@/hooks";
import { formatToDate } from "@/lib/date-fns";
import { Trip } from "@/types/trip";
import { Image, Pressable, useTheme } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

type Props = {
  trip: Trip;
};

const MainTripCard = ({ trip }: Props) => {
  const { t } = useTranslation("trips");

  const { colors } = useTheme();

  const { push } = useSignedInNavigation();

  return (
    <Pressable onPress={() => push("trip", { id: trip.id })}>
      <View style={styles.container} backgroundColor={colors.white}>
        <Image
          alt="main-image"
          source={{
            uri: "https://picsum.photos/200/300",
          }}
          style={styles.image}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.title} text={trip.title} />
          <Text
            text={`${formatToDate(trip.start)} - ${formatToDate(trip.end)}`}
          />
          <Text text={`${2} ${t("participants")}`} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FLEX_COLUMN,
    ...SHADOW,
    ...LITTLE_ROUNDED,
    padding: SPACING.MEDIUM,
    gap: SPACING.MEDIUM,
    maxHeight: 300,
  },
  image: {
    ...FULL_WIDTH_IMAGE,
    ...LITTLE_ROUNDED_IMAGE,
    height: "60%",
    resizeMode: "cover",
  },
  textWrapper: {
    ...FULL_SPACE,
    gap: SPACING.TINY,
  },
  title: MAIN_CARD_TITLE,
});

export default MainTripCard;
