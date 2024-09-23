import { Image } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

const SplashImage = () => (
  <Image
    style={styles.image}
    source={require("@/assets/images/welcome.png")}
    alt="welcome image"
  />
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default SplashImage;
