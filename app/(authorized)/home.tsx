import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Link href="/travels">
        <Text>Home</Text>
      </Link>
    </View>
  );
};

export default Home;
