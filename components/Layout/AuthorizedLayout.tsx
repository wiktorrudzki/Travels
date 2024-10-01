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

type Props = {
  title?: React.ReactNode;
  children: React.ReactNode;
};

const AuthorizedLayout = ({ children, title }: Props) => {
  return (
    <View style={styles.container}>
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
    backgroundColor: "#fff",
  },
  content: {
    paddingLeft: SPACING.HUGE,
    paddingRight: SPACING.HUGE,
  },
  navbar: {
    ...FULL_WIDTH,
    ...ALIGN_BOTTOM,
  },
});

export default AuthorizedLayout;
