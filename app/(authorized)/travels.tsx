import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Travels = () => {
  return (
    <View>
      <Link href="/account">
        <Text>Travels</Text>
      </Link>
    </View>
  );
};

export default Travels;
