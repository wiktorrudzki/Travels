import { LinkButton } from "@/components/Button";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";

const Login = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <LinkButton uppercased text={t("register")} href="/register" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
