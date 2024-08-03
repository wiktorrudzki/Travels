import {
  AsynchronousPrimaryButton,
  PrimaryButton,
  PrimaryLinkButton,
} from "@/components/Buttons";
import { getDispatchOffices, login } from "@/dal/iris";
import { usePromise, usePromiseWithLoading } from "@/hooks";
import React from "react";
import { StyleSheet, View } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <PrimaryLinkButton text="Login" href="/register" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default Login;
