import { Text } from "@/components/Text";
import { View } from "@/components/View";
import {
  CARD_TITLE,
  CENTER_FLEX,
  DASH_BOTTOM,
  FULL_WIDTH,
  SPACING,
} from "@/constants/styles";
import { useRouter } from "@/hooks";
import { Tab as TabType } from "@/types/account";
import { ChevronRightIcon, Pressable, useTheme } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

type Props = {
  tab: TabType;
};

const Tab = ({ tab: { href, title } }: Props) => {
  const { push } = useRouter();

  const { colors } = useTheme();

  const { t } = useTranslation("account");

  return (
    <Pressable onPress={() => push(href)}>
      <View style={styles.container} borderBottomColor={colors.muted[300]}>
        <Text style={styles.title} text={t(title)} />
        <ChevronRightIcon />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CENTER_FLEX,
    ...DASH_BOTTOM,
    ...FULL_WIDTH,
    paddingTop: SPACING.MEDIUM,
    paddingBottom: SPACING.MEDIUM,
    justifyContent: "space-between",
  },
  title: CARD_TITLE,
});

export default Tab;
