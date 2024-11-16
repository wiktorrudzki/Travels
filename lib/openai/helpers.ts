import { Conversation } from "@/types/chat";
import { ChatCompletionMessageParam } from "openai/resources";

export const concatWithSystemMessage = (
  conversation: Conversation,
  message: string
) =>
  [{ role: "system", content: message } as ChatCompletionMessageParam].concat(
    conversation
  );

export const addUserMessageToConversation = (
  conversation: Conversation,
  message: string
) => conversation.concat({ role: "user", content: message });
