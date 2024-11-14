import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { View } from "@/components/View";
import React from "react";
import { useTranslation } from "react-i18next";

const ChatScreen = () => {
  const { t } = useTranslation();

  return (
    <AuthorizedLayout
      withoutNavbar
      title={
        <TabBadge
          goBack={{
            to: { screen: "home" },
            text: t("home"),
          }}
          title={"Let's chat"}
        />
      }
    >
      <View></View>
    </AuthorizedLayout>
  );
};

export default ChatScreen;
