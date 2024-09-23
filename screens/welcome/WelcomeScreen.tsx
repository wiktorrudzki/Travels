import { useRouter } from "@/hooks";
import { View } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { checkFirstLaunch } from "@/features/welcome/helpers";
import { Content, SplashImage } from "@/features/welcome/components";
import { ROUTES } from "@/constants/routes";

const WelcomeScreen = () => {
  const { replace } = useRouter();

  useEffect(() => {
    checkFirstLaunch(() => replace(ROUTES.login));
  }, []);

  return (
    <View style={styles.container}>
      <View height="3/5">
        <SplashImage />
      </View>
      <Content />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
});

export default WelcomeScreen;
