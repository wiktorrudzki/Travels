import React, { ComponentProps, useMemo } from "react";
import { StyleSheet, TextInput } from "react-native";
import { View } from "../View";
import {
  CENTER_FLEX,
  FULL_WIDTH,
  LABEL_FONT_SIZE,
  SPACING,
} from "@/constants/styles";
import { useTheme } from "native-base";
import { useShow } from "@/hooks";
import PasswordShowIcon from "./PasswordShowIcon";

type Props = ComponentProps<typeof TextInput> & {
  type?: "password" | "text";
};

const NativeTextInput = ({ type = "text", ...props }: Props) => {
  const { colors } = useTheme();

  const { show, swap } = useShow();

  const isPassword = useMemo(() => type === "password", [type]);
  const hideText = useMemo(() => isPassword && !show, [isPassword, show]);

  return (
    <View style={styles.container} borderBottomColor={colors.muted[300]}>
      <TextInput secureTextEntry={hideText} style={styles.input} {...props} />
      {isPassword ? <PasswordShowIcon swap={swap} show={show} /> : undefined}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CENTER_FLEX,
    ...FULL_WIDTH,
    paddingVertical: SPACING.TINY,
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  input: {
    fontSize: LABEL_FONT_SIZE,
    flex: 1,
  },
});

export default NativeTextInput;
