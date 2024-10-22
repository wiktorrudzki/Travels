import { Trip } from "@/types/trip";
import { Menu, Pressable, ThreeDotsIcon } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

type Props = {
  trip: Trip;
  onDelete: (id: string) => void;
};

const TripMenu = ({ trip, onDelete }: Props) => {
  const { t } = useTranslation(["common", "trips"]);

  return (
    <Menu
      trigger={(triggerProps) => (
        <Pressable {...triggerProps}>
          <ThreeDotsIcon style={styles.icon} />
        </Pressable>
      )}
    >
      <Menu.Item>{t("trips:change_name")}</Menu.Item>
      <Menu.Item onPress={() => onDelete(trip.id)}>
        {t("common:delete")}
      </Menu.Item>
    </Menu>
  );
};

const styles = StyleSheet.create({
  icon: {
    transform: [{ rotate: "90deg" }],
  },
});

export default TripMenu;
