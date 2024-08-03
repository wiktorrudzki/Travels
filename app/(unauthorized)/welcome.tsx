import { PrimaryLinkButton } from "@/components/Buttons";
import { Image, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={require("@/assets/images/welcome.png")} />
        <PrimaryLinkButton text="Welcome" href="/login" />
      </View>
      <View style={styles.contentWrapper}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  imageWrapper: {},
  contentWrapper: {},
});

export default Welcome;
