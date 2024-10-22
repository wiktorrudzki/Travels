import React, { ComponentProps } from "react";
import { View } from "../View";
import { Spinner } from "native-base";
import { StyleSheet } from "react-native";
import { CENTER_FLEX, FULL_SPACE } from "@/constants/styles";

type Props = ComponentProps<typeof View>;

const LoadingSpinner = (props: Props) => {
  return (
    <View style={styles.container} {...props}>
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
