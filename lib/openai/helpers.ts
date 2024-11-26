import { MODEL } from "@/constants/chat";
import { Conversation } from "@/types/chat";
import axios from "axios";
import OpenAI from "openai";

import { ChatCompletion, ChatCompletionMessageParam } from "openai/resources";

const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
const GOOGLE_CUSTOM_SEARCH_ID = process.env.EXPO_PUBLIC_GOOGLE_CUSTOM_SEARCH_ID;

const OPENAI_API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

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

export const isValidJSON = <T extends {}>(text?: string | null): T | false => {
  try {
    return JSON.parse(text || "");
  } catch (e) {
    return false;
  }
};

export const removeAfterLastDash = (text: string) => {
  const lastDashIndex = text.lastIndexOf("-");

  if (lastDashIndex === -1) {
    return text;
  }

  return text.slice(0, lastDashIndex);
};

type GoogleSearchResult = {
  snippet: string;
};

export const googleSearch = async (
  query: string
): Promise<GoogleSearchResult[]> => {
  const url = `https://www.googleapis.com/customsearch/v1?q="${query}"&key=${GOOGLE_API_KEY}&cx=${GOOGLE_CUSTOM_SEARCH_ID}`;
  try {
    const response = await axios.get(url);
    return response.data.items || [];
  } catch (error) {
    console.error("Błąd podczas wyszukiwania w Google:", error);
    return [];
  }
};

export const generateResponseWithRag = async (
  query: string
): Promise<string> => {
  console.log("query", query);
  const searchResults = await googleSearch(query);

  if (searchResults.length === 0) {
    return "Niestety, nie znalazłem żadnych informacji na ten temat.";
  }

  const retrievedInfo = searchResults
    .slice(0, 3)
    .map((item) => item.snippet)
    .join("\n");

  console.log("retrievedInfo", retrievedInfo);

  return retrievedInfo;
};

export const extractMessage = (completion: ChatCompletion) =>
  completion.choices[0].message.content;

export const createCompletion = (messages: ChatCompletionMessageParam[]) =>
  openai.chat.completions.create({
    model: MODEL,
    max_tokens: 1000,
    temperature: 0,
    messages,
  });
