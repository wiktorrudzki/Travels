import { View } from "@/components/View";
import { useConversation } from "@/hooks";
import React from "react";

const Conversation = () => {
  const { conversation } = useConversation();

  return <View></View>;
};

export default Conversation;
