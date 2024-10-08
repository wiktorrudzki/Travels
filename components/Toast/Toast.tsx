import { COLORS } from "@/constants/colors";
import { Alert, InfoIcon, useTheme } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../View";
import { Text } from "../Text";
import { CENTER_FLEX, FLEX_COLUMN, FULL_HEIGHT } from "@/constants/styles";

type Props = {
  title?: string;
  description?: string;
  variant: string;
};

const Toast = ({ title, description, variant }: Props) => {
  const { colors } = useTheme();

  // TODO add variants and styles
  return (
    <Alert style={styles.container} backgroundColor={colors.error[400]}>
      <InfoIcon />
      <View style={styles.textWrapper}>
        {title && <Text text={title} />}
        {description && <Text text={description} />}
      </View>
    </Alert>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CENTER_FLEX,
  },
  verticalLine: {
    ...FULL_HEIGHT,
    width: 10,
    backgroundColor: COLORS.primary[400],
  },
  textWrapper: {
    ...FLEX_COLUMN,
  },
});

export default Toast;
