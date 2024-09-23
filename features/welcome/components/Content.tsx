import { PrimaryLinkButton } from "@/components/Button";
import { ROUTES } from "@/constants/routes";
import { View } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import Description from "./Description";
import { TitleText } from "@/components/Text";

const Content = () => {
  const { t } = useTranslation("welcome");

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
      <PrimaryLinkButton text={t("get_started")} href={ROUTES.login} />
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
