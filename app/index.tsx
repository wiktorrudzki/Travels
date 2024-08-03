import { PrimaryLinkButton } from "@/components/Buttons";
import { View } from "native-base";
import React from "react";

const Index = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <PrimaryLinkButton href="/welcome" text="index" />
    </View>
  );
};

export default Index;
