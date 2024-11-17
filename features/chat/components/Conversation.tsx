import { Message } from "@/components/Message";
import { useConversation } from "@/hooks";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import EmptyConversation from "./EmptyConversation";
import { FULL_WIDTH } from "@/constants/styles";

const Conversation = () => {
  const { conversation, isLoadingResponse, scrollViewRef } = useConversation();

  return (
    <ScrollView ref={scrollViewRef} style={styles.container}>
      {conversation.length > 0 ? (
        conversation.map(({ role, content }) => (
          <Message variant={role} text={content} />
        ))
      ) : (
        <EmptyConversation />
      )}
      {isLoadingResponse && <Message variant="assistant" text="..." />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: FULL_WIDTH,
});

export default Conversation;
