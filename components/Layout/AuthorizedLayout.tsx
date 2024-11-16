import React from "react";
import { View } from "../View";
import {
  DimensionValue,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
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
  withoutNavbar?: boolean;
  children: React.ReactNode;
  contentHeight?: DimensionValue;
};

const AuthorizedLayout = ({
  children,
  title,
  withoutNavbar,
  contentHeight,
}: Props) => (
  <View style={styles.container}>
    {title}
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={30}
      style={{ ...styles.content, height: contentHeight }}
    >
      {children}
    </KeyboardAvoidingView>
    {!withoutNavbar && (
      <View style={styles.navbar}>
        <Navbar />
      </View>
    )}
  </View>
);

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
