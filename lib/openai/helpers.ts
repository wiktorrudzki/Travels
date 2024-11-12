import { Conversation } from "@/types/chat";

export const setDefaultSystemMessage = (
  conversation: Conversation,
  message: string
) => [{ role: "system", content: message }].concat(conversation);

export const addUserMessageToConversation = (
  conversation: Conversation,
  message: string
) => conversation.concat({ role: "user", content: message });
