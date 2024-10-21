import React, { ComponentProps } from "react";
import { View } from "../View";
import InputErrorMessage from "./InputErrorMessage";
import DatePicker from "./DatePicker";
import { StyleSheet } from "react-native";
import {
  CENTER_FLEX,
  FULL_WIDTH,
  LITTLE_ROUNDED,
  SPACING,
} from "@/constants/styles";
import { useTheme } from "native-base";
import { Text } from "../Text";

type Props = ComponentProps<typeof DatePicker> & {
  nativeID: string;
  error: string | undefined;
  label?: string;
};

const DatePickerWithError = ({ error, nativeID, label, ...rest }: Props) => {
  const { colors } = useTheme();

  return (
    <View borderBottomColor={colors.muted[300]} style={styles.container}>
      {label && <Text text={label} />}
      <DatePicker nativeID={nativeID} {...rest} />
      <InputErrorMessage nativeId={nativeID} error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FULL_WIDTH,
    ...CENTER_FLEX,
    justifyContent: "flex-start",
    paddingBottom: SPACING.SMALL,
    borderBottomWidth: 1,
  },
});

export default DatePickerWithError;
