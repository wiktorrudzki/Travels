import { SearchInput } from "@/components/Input";
import { AuthorizedLayout } from "@/components/Layout";
import { View } from "@/components/View";
import { SPACING } from "@/constants/styles";
import { MainTravelCard, TravelCard } from "@/features/travels/components";
import { FlatList, ScrollView } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

const TravelsScreen = () => {
  const { t } = useTranslation();

  return (
    <AuthorizedLayout>
      <View style={styles.container}>
        <SearchInput />
        <View style={styles.content}>
          <MainTravelCard />
          <TravelCard key="siema" />
          <TravelCard key="sieno" />
        </View>
      </View>
    </AuthorizedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    gap: SPACING.HUGE,
  },
  content: {
    gap: SPACING.MEDIUM,
  },
});

export default TravelsScreen;
