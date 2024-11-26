import React from "react";
import { View } from "../View";
import { Text } from "../Text";
import { StyleSheet } from "react-native";
import { LITTLE_ROUNDED, SEMI_BOLD, SHADOW, SPACING } from "@/constants/styles";
import { useTheme } from "native-base";
import Markdown from "react-native-markdown-display";

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
      <Markdown
        style={{
          body: {
            color: variant === "assistant" ? colors.white : colors.black,
            fontWeight: SEMI_BOLD,
          },
          heading1: {
            color: colors.secondary[500],
            fontSize: 24,
            fontWeight: "bold",
          },
          link: {
            color: colors.primary[300],
          },
        }}
      >
        {text}
        {/* <Text
          color={variant === "assistant" ? colors.white : colors.black}
          style={styles.text}
          text={text}
        /> */}
      </Markdown>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...LITTLE_ROUNDED,
    ...SHADOW,
    margin: SPACING.MEDIUM,
    paddingVertical: SPACING.SMALL,
    paddingHorizontal: SPACING.MEDIUM,
  },
  text: {
    fontWeight: SEMI_BOLD,
  },
});

export default Message;
