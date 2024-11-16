import React from "react";
import { View } from "../View";
import { Text } from "../Text";
import { StyleSheet } from "react-native";
import { LITTLE_ROUNDED, SEMI_BOLD, SHADOW, SPACING } from "@/constants/styles";
import { useTheme } from "native-base";

type Props = {
  variant: "assistant" | "user";
  text: string;
};

const Message = ({ text, variant }: Props) => {
  const { colors } = useTheme();

  return (
    <View
      backgroundColor={
        variant === "assistant" ? colors.primary[400] : colors.white
      }
      alignSelf={variant === "assistant" ? "flex-start" : "flex-end"}
      style={styles.container}
    >
      <Text
        color={variant === "assistant" ? colors.white : colors.black}
        style={styles.text}
        text={text}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...LITTLE_ROUNDED,
    ...SHADOW,
    margin: SPACING.MEDIUM,
    padding: SPACING.MEDIUM,
  },
  text: {
    fontWeight: SEMI_BOLD,
  },
});

export default Message;
