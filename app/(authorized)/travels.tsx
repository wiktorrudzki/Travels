import { PrimaryLinkButton } from "@/components/Buttons";
import React from "react";
import { Text, View } from "react-native";

const Travels = () => {
  return (
    <View>
      <PrimaryLinkButton href="/account" text="Travels" />
    </View>
  );
};

export default Travels;
