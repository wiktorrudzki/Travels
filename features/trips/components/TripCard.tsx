import { Text } from "@/components/Text";
import { View } from "@/components/View";
import { ROUTES } from "@/constants/routes";
import {
  CARD_TITLE,
  CENTER_FLEX,
  FLEX_COLUMN,
  FULL_HEIGHT,
  LITTLE_ROUNDED,
  LITTLE_ROUNDED_IMAGE,
  SHADOW,
  SPACING,
} from "@/constants/styles";
import { useRouter } from "@/hooks";
import { formatToDate } from "@/lib/date-fns";
import { Trip } from "@/types/trip";
import { Image, Menu, Pressable, ThreeDotsIcon, useTheme } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

type Props = {
  trip: Trip;
};

const TripCard = ({ trip }: Props) => {
  const { t } = useTranslation(["common", "trips"]);

  const { colors } = useTheme();

  const { push } = useRouter();

  return (
    <Pressable onPress={() => push(ROUTES.trip(trip.id))}>
      <View style={styles.container} backgroundColor={colors.white}>
        <View style={styles.content}>
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
          </View>
        </View>
        <Menu
          trigger={(triggerProps) => (
            <Pressable {...triggerProps}>
              <ThreeDotsIcon style={styles.icon} />
            </Pressable>
          )}
        >
          <Menu.Item>{t("trips:change_name")}</Menu.Item>
          <Menu.Item>{t("common:delete")}</Menu.Item>
        </Menu>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CENTER_FLEX,
    ...SHADOW,
    ...LITTLE_ROUNDED,
    justifyContent: "space-between",
    padding: SPACING.MEDIUM,
    maxHeight: 75,
  },
  content: {
    ...CENTER_FLEX,
    justifyContent: "flex-start",
    gap: SPACING.MEDIUM,
  },
  image: {
    ...LITTLE_ROUNDED_IMAGE,
    height: 50,
    width: 50,
    resizeMode: "cover",
  },
  textWrapper: {
    ...FLEX_COLUMN,
    ...FULL_HEIGHT,
    justifyContent: "space-between",
  },
  title: CARD_TITLE,
  icon: {
    transform: [{ rotate: "90deg" }],
  },
});

export default TripCard;
