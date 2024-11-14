import { ConversationProvider } from "@/hooks";
import { ChatScreen } from "@/screens/chat";
import { ChatRouteWithId } from "@/types/chat";
import { useRoute } from "@react-navigation/native";
import React from "react";

const Chat = () => {
  const { params } = useRoute<ChatRouteWithId>();

  return (
    <ConversationProvider tripId={params.id}>
      <ChatScreen />
    </ConversationProvider>
  );
};

export default Chat;
