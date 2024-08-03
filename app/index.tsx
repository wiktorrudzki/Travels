import { PrimaryLinkButton } from "@/components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Image, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

const Welcome = () => {
  const { t } = useTranslation("welcome");

  const router = useRouter();

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const isFirstLaunch = await AsyncStorage.getItem("isFirstLaunch");
        if (isFirstLaunch !== null) {
          await AsyncStorage.setItem("isFirstLaunch", "false");
          router.replace("/login");
        }
      } catch (error) {
        console.error("Failed to fetch data from AsyncStorage", error);
      }
    };

    checkFirstLaunch();
  }, []);

  return (
    <View style={styles.container}>
      <View height="3/5">
        <Image
          style={styles.image}
          source={require("@/assets/images/welcome.png")}
          alt="welcome image"
        />
      </View>
      <View
        marginX="6"
        marginTop="6"
        marginBottom="12"
        height="2/5"
        style={styles.contentWrapper}
      >
        <View>
          <Text
            lineHeight="sm"
            marginBottom="4"
            textAlign="center"
            fontSize="2xl"
            bold
          >
            {t("title")}
          </Text>
          <Text textAlign="center" bold color="text.300">
            {t("description")}
          </Text>
        </View>
        <PrimaryLinkButton text={t("get_started")} href="/login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default Welcome;
