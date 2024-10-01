import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { View } from "@/components/View";
import React from "react";
import { useTranslation } from "react-i18next";

const AccountScreen = () => {
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

export default AccountScreen;
