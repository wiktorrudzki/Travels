import React from "react";
import { View } from "../View";
import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";
import {
  CENTER_FLEX,
  FLEX_COLUMN,
  FULL_WIDTH,
  SEMI_BOLD_TITLE,
  SPACING,
} from "@/constants/styles";
import { Text } from "../Text";
import { RouteValues } from "@/types/routes";
import { Link } from "../Link";
import { ArrowBackIcon } from "native-base";

type Props = {
  title?: string;
  goBack?: {
    text: string;
    href: RouteValues;
  };
};

const TabBadge = ({ title, goBack }: Props) => (
  <View style={styles.container}>
    <View style={styles.badge} />
    <View style={styles.textWrapper}>
      {goBack && (
        // <Link href={goBack.href}>
        <View style={styles.goBackWrapper}>
          <ArrowBackIcon color={COLORS.white} />
          <Text style={styles.goBack} text={goBack.text} />
        </View>
        // </Link>
      )}
      {title && <Text text={title} style={styles.title} />}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...FULL_WIDTH,
    position: "relative",
    height: "30%",
    justifyContent: "center",
  },
  badge: {
    backgroundColor: COLORS.primary[400],
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
  goBack: {
    color: COLORS.white,
  },
  title: { ...SEMI_BOLD_TITLE, color: COLORS.white },
});

export default TabBadge;
