import { useSignedInNavigation } from "@/hooks";
import { Feather } from "@expo/vector-icons";
import { Pressable, useTheme } from "native-base";
import React from "react";
import { useTripWithEvents } from "../hooks";

const TripSettingsButton = () => {
  const { colors } = useTheme();

  const { push } = useSignedInNavigation();

  const { trip } = useTripWithEvents();

  return (
    <Pressable
      onPress={() => push("trip/edit", { id: trip.id })}
      style={{ position: "absolute", top: "8%", right: "10%" }}
    >
      <Feather size={40} name="settings" color={colors.white} />
    </Pressable>
  );
};

export default TripSettingsButton;
