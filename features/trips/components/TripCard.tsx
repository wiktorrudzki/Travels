import { Text } from "@/components/Text";
import { View } from "@/components/View";
import {
  CARD_TITLE,
  CENTER_FLEX,
  FLEX_COLUMN,
  FULL_HEIGHT,
  LITTLE_ROUNDED,
  LITTLE_ROUNDED_IMAGE,
  SPACING,
} from "@/constants/styles";
import { useSignedInNavigation } from "@/hooks";
import { formatToDate } from "@/lib/date-fns";
import { Trip } from "@/types/trip";
import { Image, Pressable, useTheme } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { useDeleteTrip } from "../hooks";
import { LoadingSpinner } from "@/components/Spinner";
import TripMenu from "./TripMenu";

type Props = {
  trip: Trip;
};

const TripCard = ({ trip }: Props) => {
  const { deleteTrip, isLoading } = useDeleteTrip();

  const { colors } = useTheme();

  const { push } = useSignedInNavigation();

  if (isLoading) {
    return <LoadingSpinner style={{ height: "auto" }} />;
  }

  return (
    <Pressable onPress={() => push("trip", { id: trip.id })}>
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
        <TripMenu trip={trip} onDelete={deleteTrip} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CENTER_FLEX,
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
});

export default TripCard;
