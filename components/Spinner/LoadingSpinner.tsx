import React from "react";
import { View } from "../View";
import { Spinner } from "native-base";
import { StyleSheet } from "react-native";
import { CENTER_FLEX, FULL_SPACE } from "@/constants/styles";

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <Spinner size="lg" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FULL_SPACE,
    ...CENTER_FLEX,
  },
});

export default LoadingSpinner;
