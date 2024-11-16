import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { View } from "@/components/View";
import { Conversation, MessageInput } from "@/features/chat/components";
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
      <View
        style={
          {
            // height: "100%",
            // width: "100%",
            // display: "flex",
            // alignItems: "flex-start",
            // justifyContent: "center",
          }
        }
      >
        {/* <Conversation /> */}
        <MessageInput />
      </View>
    </AuthorizedLayout>
  );
};

export default ChatScreen;
