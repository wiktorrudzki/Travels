import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { View } from "@/components/View";
import { SPACING } from "@/constants/styles";
import { Conversation, MessageInput } from "@/features/chat/components";
import EmptyConversation from "@/features/chat/components/EmptyConversation";
import { useConversation } from "@/hooks";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";

const ChatScreen = () => {
  const { t } = useTranslation("trips");

  return (
    <AuthorizedLayout
      withoutNavbar
      contentHeight="66%"
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
      <View style={styles.content}>
        <Conversation />
        <MessageInput placeholder={t("send_chat_message")} />
      </View>
    </AuthorizedLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: SPACING.LARGE,
  },
  emptyContent: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.LARGE,
  },
});

export default ChatScreen;
