import { Text } from "@/components/Text";
import { View } from "@/components/View";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const TripScreen = () => {
  const { id } = useLocalSearchParams();

  console.log(id);

  return (
    <View>
      <Text text="sdas" />
    </View>
  );
};

export default TripScreen;
