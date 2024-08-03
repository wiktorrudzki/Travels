import { PrimaryLinkButton } from "@/components/Button";
import React from "react";
import { View } from "react-native";

const Register = () => {
  return (
    <View>
      <PrimaryLinkButton text="Register" href="/home" />
    </View>
  );
};

export default Register;
