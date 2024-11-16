import { Message } from "@/components/Message";
import { useConversation } from "@/hooks";
import React, { useEffect, useRef } from "react";
import { ScrollView } from "react-native";

const Conversation = () => {
  const { conversation, isLoadingResponse } = useConversation();

  const scrollViewRef = useRef<ScrollView | null>(null);

  console.log(conversation, isLoadingResponse);

  useEffect(() => {
    console.log(conversation);
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [conversation]);

  return (
    <ScrollView ref={scrollViewRef}>
      {conversation.map(({ role, content }) => (
        <Message variant={role} text={content} />
      ))}
      {isLoadingResponse && <Message variant="assistant" text="..." />}
    </ScrollView>
  );
};

export default Conversation;
