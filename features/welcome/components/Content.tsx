import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import Description from "./Description";
import { TitleText } from "@/components/Text";
import { View } from "@/components/View";
import { PrimaryButton } from "@/components/Button";
import { useUnsignedInNavigation } from "@/hooks";

const Content = () => {
  const { t } = useTranslation("welcome");

  const { push } = useUnsignedInNavigation();

  return (
    <View
      marginX="6"
      marginTop="6"
      marginBottom="12"
      height="2/5"
      style={styles.container}
    >
      <View>
        <TitleText text={t("title")} marginBottom="4" />
        <Description />
      </View>
      <PrimaryButton text={t("get_started")} onPress={() => push("login")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default Content;
