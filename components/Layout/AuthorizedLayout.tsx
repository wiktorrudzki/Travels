import React from "react";
import { View } from "../View";
import { StyleSheet } from "react-native";
import Navbar from "./Navbar";
import {
  ALIGN_BOTTOM,
  FLEX_COLUMN,
  FULL_SPACE,
  FULL_WIDTH,
  SPACING,
} from "@/constants/styles";
import { useTheme } from "native-base";

type Props = {
  title?: React.ReactNode;
  children: React.ReactNode;
};

const AuthorizedLayout = ({ children, title }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container} backgroundColor={colors.white}>
      {title}
      <View style={styles.content}>{children}</View>
      <View style={styles.navbar}>
        <Navbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FULL_SPACE,
    ...FLEX_COLUMN,
  },
  content: {
    paddingLeft: SPACING.HUGE,
    paddingRight: SPACING.HUGE,
    marginTop: SPACING.HUGE,
  },
  navbar: {
    ...FULL_WIDTH,
    ...ALIGN_BOTTOM,
  },
});

export default AuthorizedLayout;
