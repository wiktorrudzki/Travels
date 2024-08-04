import { PrimaryLinkButton } from "@/components/Button";
import React from "react";
import { View } from "react-native";

const Home = () => {
  return (
    <View>
      <PrimaryLinkButton text="Home" href="/travels" />
    </View>
  );
};

export default Home;
