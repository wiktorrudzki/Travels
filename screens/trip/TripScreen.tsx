import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { Text } from "@/components/Text";
import { View } from "@/components/View";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";

const TripScreen = () => {
  const { id } = useLocalSearchParams();

  const { t } = useTranslation();

  return (
    <AuthorizedLayout
      title={
        <TabBadge
          goBack={{
            href: "/travels",
            text: "Travels",
          }}
          title={t("Settings")}
        />
      }
    >
      <View></View>
    </AuthorizedLayout>
  );
};

export default TripScreen;
