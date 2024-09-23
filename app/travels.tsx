import { PrimaryLinkButton } from "@/components/Button";
import { ROUTES } from "@/constants/routes";
import React from "react";
import { View } from "react-native";

const Travels = () => {
  return (
    <View>
      <PrimaryLinkButton href={ROUTES.account} text="Travels" />
    </View>
  );
};

export default Travels;
