import React from "react";
import { View } from "../View";
import { StyleSheet } from "react-native";
import Navbar from "./Navbar";
import {
  ALIGN_BOTTOM,
  CENTER_FLEX,
  FULL_SPACE,
  FULL_WIDTH,
} from "@/constants/styles";

type Props = {
  children: React.ReactNode;
};

const AuthorizedLayout = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.navbar}>
        <Navbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CENTER_FLEX,
    ...FULL_SPACE,
    backgroundColor: "#fff",
  },
  navbar: {
    ...FULL_WIDTH,
    ...ALIGN_BOTTOM,
  },
});

export default AuthorizedLayout;
