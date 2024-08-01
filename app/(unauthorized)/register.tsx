import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Register = () => {
  return (
    <View>
      <Link href="/home">
        <Text>Register</Text>
      </Link>
    </View>
  );
};

export default Register;
