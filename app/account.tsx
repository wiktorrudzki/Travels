import { PrimaryLinkButton } from "@/components/Button";
import { ROUTES } from "@/constants/routes";
import React from "react";
import { View } from "react-native";

const Account = () => {
  return (
    <View>
      <PrimaryLinkButton href={ROUTES.login} text="Account" />
    </View>
  );
};

export default Account;
