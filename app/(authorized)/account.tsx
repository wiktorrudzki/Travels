import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Account = () => {
  return (
    <View>
      <Link href="/login">
        <Text>Account</Text>
      </Link>
    </View>
  );
};

export default Account;
