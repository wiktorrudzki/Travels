import { Text } from "@/components/Text";
import { View } from "@/components/View";
import {
  CARD_TITLE,
  CENTER_FLEX,
  FULL_WIDTH,
  MAIN_CARD_TITLE,
} from "@/constants/styles";
import { useTheme } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

const EmptyConversation = () => {
  const { t } = useTranslation("trips");

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.text} text={t("empty_conversation_placeholder")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CENTER_FLEX,
    ...FULL_WIDTH,
  },
  text: {
    ...MAIN_CARD_TITLE,
    fontWeight: 400,
    textAlign: "center",
  },
});

export default EmptyConversation;
