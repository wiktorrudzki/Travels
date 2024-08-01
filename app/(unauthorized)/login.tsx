import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Login = () => {
  return (
    <View>
      <Link href="/register">
        <Text>Login</Text>
      </Link>
    </View>
  );
};

export default Login;
