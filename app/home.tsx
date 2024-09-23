import { PrimaryLinkButton } from "@/components/Button";
import { ROUTES } from "@/constants/routes";
import React from "react";
import { View } from "react-native";

const Home = () => {
  return (
    <View>
      <PrimaryLinkButton text="Home" href={ROUTES.travels} />
    </View>
  );
};

export default Home;
