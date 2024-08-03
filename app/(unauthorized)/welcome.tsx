import { PrimaryLinkButton } from "@/components/Buttons";
import { Image, Text, View } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        {/* <Image source={require("@/assets/images/welcome.png")} /> */}
        <PrimaryLinkButton text="Welcome" href="/login" />
      </View>
      <View style={styles.contentWrapper}>
        <Text>{t("siema")}</Text>
      </View>
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
