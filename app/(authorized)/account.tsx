import { PrimaryLinkButton } from "@/components/Buttons";
import React from "react";
import { View } from "react-native";

const Account = () => {
  return (
    <View>
      <PrimaryLinkButton href="/login" text="Account" />
    </View>
  );
};

export default Account;
