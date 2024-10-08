import React from "react";
import { View } from "../View";
import { StyleSheet } from "react-native";
import {
  CENTER_FLEX,
  FLEX_COLUMN,
  FULL_WIDTH,
  SEMI_BOLD_TITLE,
  SPACING,
} from "@/constants/styles";
import { Text } from "../Text";
import { RouteValues } from "@/types/routes";
import { ArrowBackIcon, useTheme } from "native-base";

type Props = {
  title?: string;
  goBack?: {
    text: string;
    href: RouteValues;
  };
};

const TabBadge = ({ title, goBack }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.badge} backgroundColor={colors.primary[400]} />
      <View style={styles.textWrapper}>
        {goBack && (
          // <Link href={goBack.href}>
          <View style={styles.goBackWrapper}>
            <ArrowBackIcon color={colors.white} />
            <Text color={colors.white} text={goBack.text} />
          </View>
          // </Link>
        )}
        {title && (
          <Text text={title} color={colors.white} style={styles.title} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FULL_WIDTH,
    position: "relative",
    height: "30%",
    justifyContent: "center",
  },
  badge: {
    borderBottomLeftRadius: 2000,
    borderBottomRightRadius: 2000,
    position: "absolute",
    width: "200%",
    height: "200%",
    left: "-50%",
    top: "-100%",
  },
  textWrapper: {
    ...FLEX_COLUMN,
    gap: SPACING.MEDIUM,
    paddingLeft: SPACING.HUGE,
  },
  goBackWrapper: {
    ...CENTER_FLEX,
    justifyContent: "flex-start",
    gap: SPACING.SMALL,
  },
  title: SEMI_BOLD_TITLE,
});

export default TabBadge;
